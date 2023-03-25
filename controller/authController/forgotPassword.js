const forgotPasswordServices = require('../../services/authServise/forgotPasswordServices.js')


const forgotPassword = async(req, res, next)=>{
    const { email} = req.body;
    try {
  await forgotPasswordServices(email)
     
  res.status(200).json({
        status: "OK",
        code: 200,
       message:`sucsess `,
      });
    } catch (error) {
      next(error);
    }
}
module.exports=forgotPassword