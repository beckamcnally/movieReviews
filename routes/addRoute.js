const addMovies = require('express').Router();
const db = require("../db/seeds");

addMovies.post('/add-movie', (req, res) => {
  
});


addMovies.post('/movie-reviews', (req, res) => {
  
});

addMovies.post('/review/:id', (req, res) => {
  // updates a review pertaining to a specific movie
});

module.exports = addMovies;