// const express = require('express')
import express from 'express'
import dotenv from 'dotenv';
import configViewEngine from './src/config/viewEngine.js';
import router from './src/routes/web.js';
import mysql from 'mysql2'

dotenv.config();

const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

//test connection
const connection = mysql.createConnection({
    host: process.env.HOST_NAME,
    port: 3307,
    user: 'root',
    password: '123456',
    database: 'hoidanit'
})

connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log(">>result", results);
        console.log(">>fields", fields);
    }
)

configViewEngine(app);

app.use('/', router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})