// const UserSchema = require("../../models/userSchema");
require("dotenv").config();
const registrationServices = require("../../services/authServise/registrationServices");

const registration = async (req, res, next) => {
  try {
    const { email, password } = req.body;
     const body = req.body;
    //  console.log('req.paras',req.params)
    //  console.log('req.body', req.body)
    //  if(email){
    //     return res.status(409).json({
    //       message: "conflict email"
    //     })
    //    }
    const user = await registrationServices(email, password, body);
  
    res.status(201).json({
        status: "Created",
        code: 201,
        message: `create ${email} and ${password} sucsess`
      });
      if(email){
        return   res.status(409).json({
        status: "Cconflict",
        code: 201,
        message: `${email} was registrate`
      });
      }
  
   return user 
  } catch (error) {
    next(error);
  }
};
module.exports = registration;
