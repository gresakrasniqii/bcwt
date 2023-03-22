'use strict';
const userModel = require('../models/userModel');

const users = userModel.users;

const getUserList = (req, res) => {
    for (const user of users){
        delete user.password;
    }
    res.json(users);
};

const getUser = (req, res) => {
    //console.log(req.params);
    const id = req.params.userId;
    // filter matching user(s) based on id
    const filteredUsers = users.filter(user => id == user.id);
    if (filteredUsers.length > 0) {
      res.json(filteredUsers[0]);
    } else {
      // send response 404 if id not found in array 
      // res.sendStatus(404);
      res.status(404).json({message: 'User not found.'})
    }
  };

const postUser = (req, res) => {
    console.log(req.body);
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.passwd
    };
    users.push(newUser);
    res.status(201).send('Added user ' + req.body.name);
};

const putUser = (req, res) => {
    res.send('From this endpoint you can modify users.');
};

const deleteUser = (req, res) => {
    res.send('From this endpoint you can delete a user.');
};

const userController = {getUserList, getUser, postUser, putUser, deleteUser};
module.exports = userController;