
const express =require('express')
const app=express()
const cors = require('cors')
require('dotenv').config()
const port=process.env.port;
const host=process.env.host;
const bodyparser=require('body-parser')

///custome module 
const services = require(".routes/services")
const db= require('.data/db')
const urlDB =require(".data/urlDB");
// setting up the cors to give access to the frontend 
const corsOptions={
    origin:'http://localhost:8080',
    optionSuccesStatus:true
};
app.use(cors(corsOptions))