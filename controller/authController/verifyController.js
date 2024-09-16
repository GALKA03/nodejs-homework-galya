const verifyServices = require('../../services/authServise/verifyServices')

const verifyController=async(req, res, next)=>{
   const {code} = req.params;

   const {email}=req.body
// console.log('req.params',req.params)
// console.log('req.body', req.body)
try{
//const codeConeroller= await verifyServices()
await verifyServices(code,email)

// console.log('code control',codeConeroller)
res.status(200).json({
    status: "OK",
    code: 200,
   message:`Verification successful`
  });
}catch(error) {
    next(error);
  }

}
module.exports=verifyController