
// const {register,login,home} =require('../controller/user_controller')
// const auth =require('../middleware/user_middleware')


// const userRouting = require('express').Router();
// userRouting.post('/register',register);
// userRouting.post('/login',login);
// userRouting.get('/home',auth,home)

// module.exports = userRouting;\

const {register,login} = require('../controller/login_register')



const user_Routing = require('express').Router()
user_Routing.post('/register',register)
user_Routing.post('/',login)
module.exports = user_Routing