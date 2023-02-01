const deleteMovies = require('express').Router();
const db = require("../db/seeds");

deleteMovies.delete('/movie/:id', (req, res) => {
  
});



module.exports = deleteMovies;