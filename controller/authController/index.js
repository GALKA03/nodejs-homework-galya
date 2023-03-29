const registration = require('./registration')
const login = require ('./login.js')
const logout=require('./logOut')
 const currentUser =require('./currentUser')
const verifycontroller = require('./verifyController')
const uploadAvatar = require('./uploadAvatar')
const forgotEmail =require('./forgotEmail')

module.exports={
    registration,
    login,
    logout,
    currentUser,
    verifycontroller,
    uploadAvatar,
    forgotEmail
}