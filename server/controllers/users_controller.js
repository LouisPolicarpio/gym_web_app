const users = require('express').Router()
const db = require('../models')
const{User} = db

//get all users 
users.get('/', async(req,res) =>{
    try {
        const foundUsers = await User.findAll()
        res.status(200).json(foundUsers)
    } catch (error) {
        res.status(500).send("server error")
        console.log(error)
    }
})

module.exports = users;