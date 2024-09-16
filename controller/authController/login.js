 const UserSchema = require("../../models/userSchema");
 const jwt = require("jsonwebtoken");
const loginServices =require('../../services/authServise/loginServices')
require("dotenv").config();



const login = async(req, res, next)=>{
    const { email, password } = req.body;
    try {
 
      const token = await loginServices(email,password)
      res.status(200).json({
        status: "OK",
        code: 200,
       message:`sucsess ${email} login`,token
      });
    } catch (error) {
      next(error);
    }
}
module.exports=login