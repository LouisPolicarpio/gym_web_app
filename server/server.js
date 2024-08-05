//DEPENDENCIES
const express = require ('express');
const app = express();
const {sequelize} = require('sequelize');
const path = require ('path');
const cors = require('cors');

//CONFIGURE MIDDLEWARE 
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//CONTROLLER
const usersController = require('./controllers/users_controller');
app.use('/api/users' , usersController);

//LISTEN 
app.listen(4004,() => {
    console.log('Server is running on port 4004');
    
})