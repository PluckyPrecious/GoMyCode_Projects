const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;

//require and configure .env
require("dotenv").config()
const url = process.env.DB_CONNECTION;

// require user model
const User = require("./models/User");

//connect to mongodb
mongoose.connect(url,
{ useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Connection to MongoDB Successful!'))
    .catch(() => console.log('Connection to MongoDB Failed!'));

app.use(express.json());


// RETURN ALL USERS 

app.get("/users", (req, res) =>
    User.find()
        .then((el) => res.json(el))
        .catch((err) => console.log(err))
);

//ADD A NEW USER TO THE DATABASE 
 
app.post("/add_user", (req, res) => {
    const { User } = req.body;
    let newUser = new User({ lastName, firstName, email, phoneNumber });
    newUser
        .save()
        .then(() => res.json({ msg: "User added " }))
        .catch((err) => console.log(err));
});

// EDIT A USER BY ID 

app.put("/edit_user/:id", (req, res) => {
    User.findByIdAndUpdate(req.params.id, { $set: { ...req.body } }, (err) => {
        if (err) throw err;
        User.findById(req.params.id)
            .then((el) => res.json(el))
            .catch((err) => console.log(err));
    });
});

// REMOVE A USER BY ID
app.delete("/delete_user/:id", (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json({ msg: "User deleted." }))
        .catch((err) => console.log(err));
});

// port set up
app.listen(PORT, (err) =>
    err ? console.log(err) : console.log(`App is listening on port ${PORT}...`)
);