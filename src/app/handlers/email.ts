import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/', (req, res, next) => {
  const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'cliangsuper.mini.dev@gmail.com',
      pass: 'liangtony1989',
    },
  });

  smtpTransport
    .sendMail({
      to: req.body.emailTo,
      subject: req.body.subject,
      html: req.body.emailBody,
    })
    .then(response => {
      console.log(response);
      console.log('sent');
      res.status(200).send();
    })
    .catch(error => {
      console.log(error);
      console.log('cannot send');
      res.status(500).send();
    });
});

export default router;
