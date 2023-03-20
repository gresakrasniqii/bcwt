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
    const id = req.params.userId;
    
    const filteredUsers = users.filter(user => id == user.id);

    if (filteredUsers.length > 0) {
        res.json(filteredUsers[0]);
    } else {
        res.status(404).send("No user found");
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