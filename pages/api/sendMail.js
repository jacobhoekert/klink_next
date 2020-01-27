const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const cors = require('cors')({origin: true});
const creds = require('../../email.config');

export default async (req, res) => {
  cors(req, res, () => {  
    let transporter = nodemailer.createTransport(smtpTransport({
      service: 'gmail',
      secure: true,
      auth: {
          user: 'jshoekert@gmail.com',
          pass: creds.password
      }
    }));

    let {firstName, lastName, email, message} = req.body;
    let content = `name: ${firstName} ${lastName} \n email: ${email} \n message: ${message}`

    const mail = {
      from: `${firstName} ${lastName} <${email}>`,
      to: 'support@klinkfundraising.com',
      subject: `Website Contact Form Message from ${firstName} ${lastName} <${email}>`,
      text: content
    }

    return transporter.sendMail(mail, (err, info) => {
      if(err){
        return res.send(err.toString());
      }
      return res.send('Email sent');
    });
  });    
};