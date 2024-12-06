const express = require('express');
const app = express();
const dotenv = require('dotenv');
const db = require('./models');
const User = db.User;
dotenv.config();

const port = process.env.PORT || 8081;
app.use(express.json());

app.post('/users', async(req, res) =>{
    try{
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch(err) {
        res.status(400).json({error:err.message})
    }
})

app.get('/users/:id', async(req, res) =>{
    try{
        const users = await User.findAll();
        res.status(200).json(users);
    } catch(err){
        res.status(400).json({error:err.message})
    }
})

app.listen(port,()=>{
    console.log('Running on the port '+port);
})