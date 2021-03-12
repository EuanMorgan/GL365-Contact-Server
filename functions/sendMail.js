const nodemailer = require("nodemailer");
require("dotenv").config();
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const send = async (name, email, subject, message, plainMessage) => {
  let mailOptions = {
    from: email,
    to: "carl@guitarlessons365.com",
    subject: subject,
    text: `Submission of Contact Form:\nName: ${name}\nReply to:${email}\nSubject:${subject}\n\nMessage:\n${plainMessage}\n`,
    html: `<p style="font-weight:bold">
    <u>Submission of Contact Form:</u>
    </p><p style="font-weight:bold"> 
    <u>Name:</u> ${name}</p><br/>
    <p style="font-weight:bold"> <u>Reply to:</u> <a href="mailto:${email}">${email}</a></p><br/>
    <p style="font-weight:bold"> <u>Subject:</u> ${subject}</p><br/><p style="font-weight:bold"><u>Message:</u><br/> ${message}</p><br/>`,
    replyTo: email,
  };
  try {
    await transporter.sendMail(mailOptions);
    return "success";
  } catch (error) {
    return "error";
  }
};

module.exports = { send };
