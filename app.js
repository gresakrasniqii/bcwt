'use strict';
const express = require('express');
const cors = require('cors');
const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');
const app = express();
const port = 3000;

//log middleware
app.use((req, res, next) => {
  console.log(Date.now() + ': request: ' + req.method + '' + req.path)
  next();
});

//server example-ui
app.use(express.static('example-ui'));

//add cors header
app.use(cors());

//middleware for parsing request 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/cat', catRoute);
app.use('/user', userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
