const express = require('express');
const UserController = require('../controller/UserController');

const router = express.Router()

const user = new UserController()

router.get('/', (req, res) => 
     res.status(200).json(user.getRanking())
);

module.exports = app => app.use('/user',router);