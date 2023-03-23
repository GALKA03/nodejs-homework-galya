const mailer = require("../../nodemailer/nodemailer");
const Verification= require('../../models/verificationSchema')
const{NotFoundError}= require('../../helpers/errors')
const UserSchema= require('../../models/userSchema');
//const { verify } = require("jsonwebtoken");
const verifyServices=async(code)=>{

const verification = await Verification.findOne({
code,
active:true
})

if(!verification){
throw new NotFoundError('Invalid or expired confirmation code')}

const user= UserSchema.findById(verification.userId)

if(!user){
    throw new NotFoundError('No user found')}

verification.active = false;
await verification.save()

user.verify = true;
await user.save()

    const massage = {
        from: "Meiler <galyait@meta.ua>",
        to: user.email,
        subject: "Congratulation! You are sucsessfuli registred on ouer site!",
        text: `Поздравляем с успещной регистрациуей!
    Данные учетной записи:
    email: ${user.email}
  
    Данное письмо не требует ответа!
    `,
       // html: `POST http://localhost:4045/api/auth/users/verify/${code}`,
    };
      await mailer(massage);
}
  
module.exports=verifyServices