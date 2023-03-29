const mailer = require("../../nodemailer/nodemailer");
const Verification= require('../../models/verificationSchema')
const{NotFoundError,BadRequestError}= require('../../helpers/errors')
const UserSchema= require('../../models/userSchema');
//const { verify } = require("jsonwebtoken");
const verifyServices=async(code)=>{
try{
    const verification = await Verification.findOne({
        code,
         active:true
        }) 
        console.log('verification',verification)
        if(!verification){
        throw new NotFoundError('Invalid or expired confirmation code')}
        
        const user= await UserSchema.findById(verification.userId)
       if(!user){
            throw new NotFoundError('No user found')}

        verification.active = false;
        await verification.save();
        
         user.verify = true;
         
       await user.save()
        
            const massage = {
                from: "Meiler <galyna.matvienko@mailfence.com>",
                to: user.email,
                subject: "Congratulation! You are sucsessfuli registred on ouer site!",
                text: `Поздравляем с успешной регистрацией!
            Данные учетной записи:
            email: ${user.email}
          
            Данное письмо не требует ответа!
            `,
             html: `<h1>Поздравляем с успещной регистрациуей!</h1>
             <p>Данные учетной записи:
             email: ${user.email}
           
             Данное письмо не требует ответа!</p>`,
            };
              await mailer(massage);
}catch(error) {
    console.log(error);
  }

    //   if(!email){
    //     throw new BadRequestError('missing required field email')
    //     }
// else{
//     await mailer(massage);
// }        

}
  
module.exports=verifyServices