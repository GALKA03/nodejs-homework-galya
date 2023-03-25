const { v4: uuidv4 } = require('uuid');
const UserSchema = require('../../models/userSchema')

 const forgotPasswordServices= async(email)=>{
   try{
    const user = await UserSchema.findOne({ email, verify:true });
    if (!user){
        throw new ValidationJoiError(`missing required field email ${email}`)  
    }
// const password =uuidv4();
user.email= email;
await user.save()

const massage = {
    from: "galyna.matvienko@mailfence.com",
    to: email,
    subject: 'New confirmation',
    text:`Pleas confirm your email again`,
    html:`<h1>Pleas <a href="POST http://localhost:4045/api/auth/users/verify/${code}">confirm</a> your email,   </h1>`,
  };
   await mailer(massage);
   } catch(error) {
    console.log(error);
  }
  
}
 module.exports= forgotPasswordServices
