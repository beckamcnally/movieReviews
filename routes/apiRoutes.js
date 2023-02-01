const movies = require('express').Router();
// const db = require("../db/seeds.sql"); // ?? 


movies.get('/movies', (req, res) => {
  console.log(req)
  console.log(res)
db.query('SELECT movie_name FROM movie', function (err, results) {
  console.log(results);
});
});



module.exports = movies;