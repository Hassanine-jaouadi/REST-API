const router = require("express").Router();
let User = require("../models/user.model"); // require the mongoose model

// get users
//localhost:5000/users
http: router.route("/").get((req, res) => {
  User.find()
    .then(users => res.send(users))
    .catch(err => console.log(err));
});

// add users
//http://localhost:5000/users/add
router.route("/add").post((req, res) => {
  const { name, email, phone } = req.body;

  const newUser = new User({ name, email, phone });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
