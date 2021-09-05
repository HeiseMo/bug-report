import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link,  BrowserRouter as Router } from 'react-router-dom';
import AuthService from './components/auth/auth-service';
import { useHistory } from "react-router-dom";
//import Sidebar from './components/Sidebar';
//import Header from './components/Header';
//import Statusbar from './components/Statusbar';
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import Dashboard from './components/Dashboard';


class App extends Component {
  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }
 
  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }
 
 
  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
    this.fetchUser()
    if(this.state.loggedInUser){
      return (
          <Router>
            <Switch>   
              <Route path='/' render={(...props) => (
              <Dashboard userObj={this.state.loggedInUser}/>
            )} />
            </Switch>
          </Router>
      );
    } else {
      return (<Router>
        <div className="auth">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path='/'render={(props) => (
              <Login getUser={this.getTheUser}/>
            )} />
                <Route path="/sign-up" component={Signup} />
              </Switch>
            </div>
          </div>
        </div></Router>);
    }
  }
}
 
export default App;



