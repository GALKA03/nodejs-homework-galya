const verifyServices = require('../../services/authServise/verifyServices')

const verifyController=async(res,req,next)=>{
   const { code } = req.params;
   
console.log('req.paras',req.params)
console.log('req.body', req.body)
try{

//const codeConeroller= await verifyServices()
const codeConeroller= await verifyServices(code)

console.log('code control',codeConeroller)


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