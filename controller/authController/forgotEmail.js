const forgotEmailServices = require('../../services/authServise/forgotEmailServices.js')


const forgotEmail = async(req, res, next)=>{
    const { email} = req.body;
    try {
      
  await forgotEmailServices(email)
     
  res.status(200).json({
        status: "OK",
        code: 200,
       message:`sucsess email`,
      });
    } catch (error) {
      next(error);
    }
}
module.exports=forgotEmail