const express = require("express");
const router = express.Router();
const User = require("../Model/userModel");


/*
router.get("/", (req, res) => {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.json(err);
    });
});
*/
router.get("/:username", (req, res) => {
  // check if req.params.id is valid, if not respond with a 4xx status code
  User.findOne({"username": req.params.username})
    .then((user) => {
      if (!user) {
        res.status(404).json(user);
      } else {
        res.json(user);
      }
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/account/:id", (req, res) => {
  // check if req.params.id is valid, if not respond with a 4xx status code
  User.findOne({"_id": req.params.id})
    .then((user) => {
      if (!user) {
        res.status(404).json(user);
      } else {
        res.json(user);
      }
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((project) => {
      res.status(200).json({ message: "ok" });
    })
    .catch((err) => {
      res.json(err);
    });
});
router.put("/account/:id", (req, res) => {
  const {
    username,
    password,
    role
  } = req.body;
  User.findByIdAndUpdate(
    req.params.id,
    {
        username,
        password,
        role
    },
    { new: true }
  )
    .then((pro) => {
      res.status(200).json(pro);
    })
    .catch((err) => {
      res.json(err);
    });
});



module.exports = router;