'use strict';
const pool = require("../database/db");
const promisePool = pool.promise();

const getAllCats = async () => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    const sql = 'SELECT wop_cat.*, wop_user.name AS ownername  FROM wop_cat LEFT JOIN wop_user ON wop_cat.owner = wop_user.user_id';
    const [rows] = await promisePool.query(sql);
    return rows;
  } catch (e) {
    console.error("error", e.message);
    throw new Error('sql query failed');
  }
};

const getCatById = async (id) => {
  try {
    const sql = 'SELECT wop_cat.*, wop_user.name as ownername FROM wop_cat LEFT JOIN wop_user ON wop_cat.owner = wop_user.user_id where cat_id = ?';
    const [rows] = await promisePool.query(sql, [id]);
    return rows;
  } catch (e) {
    console.error("error", e.message);
    throw new Error('sql query failed1');
  }
}

const insertCat = async () => {
  try {
    const sql = 'INSERT INTO wop_cat VALUES (?, ?, ?, ?, ?, ?);';
    const [rows] = await promisePool.query(sql, [
      null,
      cat.name, 
      cat.weight, 
      cat.owner, 
      cat.filename, 
      cat.birthdate,
    ]);
    return rows;
  } catch (e) {
    console.error("error", e.message);
    throw new Error('sql insert cat failed');
  }
}

const modifyCat = async () => {
  try {
    const sql = 'INSERT INTO wop_cat VALUES (?, ?, ?, ?, ?, ?);';
    const [rows] = await promisePool.query(sql, [
      null,
      cat.name, 
      cat.weight, 
      cat.owner, 
      cat.filename, 
      cat.birthdate,
    ]);
    return rows;
  } catch (e) {
    console.error("error", e.message);
    throw new Error('sql insert cat failed');
  }
}

module.exports = {
  getAllCats, 
  getCatById,
  insertCat,
  modifyCat,
};