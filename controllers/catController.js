'use strict';
const catModel = require('../models/catModel');

const cats = catModel.cats;

const getCatList = (req, res) => {
    res.json(cats);
};

const getCat = (req, res) => {
    //console.log(req.params);
    const id = req.params.catId;
    //todo filter matching cat based on id
    //todo response 404 of od not found in array (res.status(404))
    const cat = cats [id-1];
    if (catModel.length) {
        res.json(catModel);
      } else {
        res.status(404).send("no data");
      }
    res.json();
};

const postCat = (req, res) => {
    res.send('With this endpoint you can add cats.');
};

const putCat = (req, res) => {
    res.send('From this endpoint you can modify cats.');
};

const deleteCat = (req, res) => {
    res.send('From this endpoint you can delete a cat.');
};

const catController = (getCatList, getCat, postCat, putCat, deleteCat);
module.exports = catController;