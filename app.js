const express = require('express');
const app = express()

const mongoose = require('mongoose');

app.use(express.json());

// imported .env
require('dotenv').config();

const db = require('./db/connect').Mongo_URL


mongoose.connect(db, {dbName: 'backend-blog'})
.then(()=> console.log('connected to mongodb'))
.catch((err) =>console.erorr('err'))












app.listen(7150, ()=>{
    console.log('port is listening @ 7150');
    
})