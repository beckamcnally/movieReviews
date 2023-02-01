const express = require('express');
const mysql = require('mysql12');
const { v4: uuidv4 } = require('uuid');

const PORT = process.env.PORT || 3001 ;

const app = express();

app.use(express.urlencoded({ extended: true}));

app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'movies_db'
    },
    console.log("database")
);

