'use strict';

const catModel = require('../models/catModel');


const getCatList = async (req, res) => {
    try {
        const cats = await catModel.getAllCats();
        //console.log(cats);
        res.json(cats);
    } catch (error) {
        res.status(500).json({error: 500, message: error.message});
    }
};

const getCat = async (req, res) => {
    //console.log(req.params);
    const catId = Number(req.params.catId);
    if (!Number.isInteger(catId)){
        res.status(400).json({error: 500, message:'invalid id'});
        return;
    }
    const [cat] = await catModel.getCatById(catId);
    console.log('get Cat', cat)

    if (cat) {
        res.json(cat[0]);
    } else {
        res.status(404).send("No cat found");
    }
 };

const postCat = async (req, res) => {
    console.log('posting a cat', req.body, req.file);
    const newCat = req.body;
    newCat.filename = req.file.filename;
    const result = await catModel.insertCat(newCat);
    res.tatus(201).send('new cat added');

};

const putCat = (req, res) => {
    res.send('From this endpoint you can modify cats.');
};

const deleteCat = (req, res) => {
    res.send('From this endpoint you can delete a cat.');
};

const catController = {getCatList, getCat, postCat, putCat, deleteCat};
module.exports = catController;