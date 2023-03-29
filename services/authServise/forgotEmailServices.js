// const { v4: uuidv4 } = require('uuid');
const UserSchema = require("../../models/userSchema");
const Verification = require("../../models/verificationSchema");
const { BadRequestError } = require("../../helpers/errors");
const mailer = require("../../nodemailer/nodemailer");
const { v4: uuidv4 } = require("uuid");

const forgotEmailServices = async (email, code) => {
  try {
    const code = uuidv4();

    const user = await UserSchema.findOne({ email, verify: false });
    if (!email) {
      throw new ValidationJoiError(`missing required field email `);
    }
    const verification = await Verification.findOne({
      code,
      active: true,
    });
    if (verification) {
      throw new NotFoundError("Verification has already been passed");
    }

    if (!verification) {
      const massage = {
        from: "galyna.matvienko@mailfence.com",
        to: email,
        subject: "New confirmation",
        text: `Pleas confirm your email again: get localhost:4045/api/auth/users/verify/${code}`,
        html: `<h1>Pleas <a href="http://localhost:4045/api/auth/users/verify/${code}">CONFIRM</a> your email again</h1>`,
      };
      await mailer(massage);

      const verificationNew = new Verification({
             code,
             active:false,
             userId: user._id,
           });
      // verification.active = false;
     await verificationNew.save();
      
      user.verify = true;
      await user.save();
    } 

  } catch (error) {
    console.log(error);
  }
};
module.exports = forgotEmailServices;
