// routes/auth-routes.js

const express    = require('express');
const authRoutes = express.Router();

const passport   = require('passport');
const bcrypt     = require('bcryptjs');


// User Modal
const User       = require('../Model/userModel');


//Signup Stuff
authRoutes.post('/signup', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    if (!username || !password) {
      res.status(400).json({ message: 'Provide username and password' });
      return;
    }

    if(password.length < 7){
        res.status(400).json({ message: 'Please make your password at least 8 characters long for security purposes.' });
        return;
    }
  
    User.findOne({ username }, (err, foundUser) => {

        if(err){
            res.status(500).json({message: "Username check went bad."});
            return;
        }

        if (foundUser) {
            res.status(400).json({ message: 'Username taken. Choose another one.' });
            return;
        }
  
        const salt     = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);
  
        const aNewUser = new User({
            username:username,
            password: hashPass
        });
  
        aNewUser.save(err => {
            if (err) {
                res.status(400).json({ message: 'Saving user to database went wrong.' });
                return;
            }
            
            // Automatically log in user after sign up
            // .login() here is actually predefined passport method
            req.login(aNewUser, (err) => {

                if (err) {
                    res.status(500).json({ message: 'Login after signup went bad.' });
                    return;
                }
            
                // Send the user's information to the frontend
                // We can use also: res.status(200).json(req.user);
                res.status(200).json(aNewUser);
            });
        });
    });
});
//Login Stuff

authRoutes.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, theUser, failureDetails) => {
        console.log("this is err------", err, "this is user----------", theUser)
        if (err) {
            console.log("Did i enter here to error?")
            res.status(500).json({ message: 'Something went wrong authenticating user' });
            return;
        }
    
        if (!theUser) {
            // "failureDetails" contains the error messages
            // from our logic in "LocalStrategy" { message: '...' }.
            console.log("Did i enter here to failureDetails?")
            res.status(401).json(failureDetails);
            return;
        }
 
        // save user in session
        req.login(theUser, (err) => {
            if (err) {
                res.status(500).json({ message: 'Session save went bad.' });
                return;
            }
 
            // We are now logged in (that's why we can also send req.user)
            res.status(200).json(theUser);
        });
    })(req, res, next);
});

//Logout Stuff
authRoutes.post('/logout', (req, res, next) => {
    req.logout();
    res.status(200).json({ message: 'Log out success!' });
});

//User Logged In
 
authRoutes.get('/loggedin', (req, res, next) => {
    // req.isAuthenticated() is defined by passport
    console.log(req.isAuthenticated())
    if (req.isAuthenticated()) {
        console.log("I am authenticated")
        res.status(200).json(req.user);
        return;
    }
    console.log("I am not authenticated")
    res.status(403).json({ message: 'Unauthorized' });
});

authRoutes.get('/get-users', (req, res, next) => {
    User.find()
    .then(reports => {
        res.json(reports);
      })
      .catch((err) => {
        res.json(err);
      });
});


module.exports = authRoutes;