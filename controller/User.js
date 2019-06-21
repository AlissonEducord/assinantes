const User = require ("../models/User") 
const express = require('express')

const router = express.Router()

const user = new User()

router.get('/ranking', (req, res) => {
    user.getRankink()
           .then( (result) => { 
               
               res.status(200).json( result )
            })    
});

router.post('/mensagem', (req, res) => {
    let msg = req.body

    user.mensagem(msg)
           .then( (result) => { 
               
               res.status(200).json( {mensagem: 'Mensagem enviada com sucesso'} )
            })    
});

module.exports = app => app.use('/user',router);