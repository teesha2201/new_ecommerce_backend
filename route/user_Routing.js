
const {register,login,home} =require('../controller/user_controller')
const auth =require('../middleware/user_middleware')


const userRouting = require('express').Router();
userRouting.post('/register',register);
userRouting.post('/login',login);
userRouting.get('/home',auth,home)

module.exports = userRouting;