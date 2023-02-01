const express = require('express');
const mysql = require('mysql2');
const { v4: uuidv4 } = require('uuid');
const apiRoutes = require('./routes/apiRoutes.js')

const PORT = process.env.PORT || 3001 ;

const app = express();

app.use(express.urlencoded({ extended: true}));

app.use(express.json());
app.use('/api', apiRoutes);


const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'movies_db'
    },
    console.log("database")
);





app.listen(PORT, () => {
  console.log(`${PORT}`)
})

module.exports = db