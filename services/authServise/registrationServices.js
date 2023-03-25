const UserSchema = require("../../models/userSchema");
// const { ConflictErrors } = require("../../helpers/errors");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const mailer = require("../../nodemailer/nodemailer");
const Verification= require('../../models/verificationSchema')
const { v4: uuidv4 } = require('uuid');
//const getClient=require('../../nodemailer/nodemailer')


const registrationServices = async (email, password, body) => {
  try {
    // console.log('Verification',{code, userId})
    const gravatarURL = gravatar.url(UserSchema.email, {
      s: "200",
      r: "x",
      d: "404",
    });
    const parole = await bcrypt.hashSync(password, 10);
    const userCreate = new UserSchema({
      ...body,
      password: parole,
      avatarURL: gravatarURL,
    });
       //console.log('userCreate',userCreate)
    await userCreate.save();
 //const code = '1234'
  const code = uuidv4() /*.toString();*/
 //console.log('code',code)
    const verification = new Verification({
      code,
      userId: userCreate._id,
    });     
    await verification.save();
//console.log('verification',verification)
 const massage = {
        from: "galyna.matvienko@mailfence.com",
        to: email,
        subject: 'Thenk you for registration',
        text:`Pleas confirm your email: get localhost:4045/api/auth/users/verify/${code}`,
        html:`<h1>Pleas <a href="http://localhost:4045/api/auth/users/verify/${code}">CONFIRM</a> your email</h1>`,
      };
       await mailer(massage);
   //console.log('massage', massage)

  } catch(error) {
    console.log(error);
  }
};
module.exports = registrationServices;
