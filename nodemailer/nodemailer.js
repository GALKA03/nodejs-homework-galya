const nodemailer = require("nodemailer");
// require('dotenv').config();

const config = {
    host: 'smtp.meta.ua',
    port: 465,
    secure:true,
    auth: {
        user: 'galyait@meta.ua',
        pass: 'G1111111111a'
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