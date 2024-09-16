const nodemailer = require("nodemailer");
// require('dotenv').config();

const config = {
    host: 'smtp.mailfence.com',
    port: 465,
    secure:true,
    auth: {
        user: 'galyna.matvienko@mailfence.com',
        pass: 'My12345678my'
      },
    };
    const transporter= nodemailer.createTransport(config)


const  mailer= message =>{
   transporter.sendMail(message, (err, info)=>{
        if(err) {
            return console.log(err)}
    console.log('sent email:',info)
    }

)

}
module.exports= mailer
// const nodemailer = require('nodemailer');

// require('dotenv').config();

// const config = {
//   host: 'smtp.meta.ua',
//   port: 465,
//   secure: true,
//   auth: {
//     user: 'goitnodejs@meta.ua',
//     pass: process.env.PASSWORD,
//   },
// };

// const transporter = nodemailer.createTransport(config);
// const emailOptions = {
//   from: 'goitnodejs@meta.ua',
//   to: 'noresponse@gmail.com',
//   subject: 'Nodemailer test',
//   text: 'Привет. Мы тестируем отправку писем!',
// };

// transporter
//   .sendMail(emailOptions)
//   .then(info => console.log(info))
//   .catch(err => console.log(err));