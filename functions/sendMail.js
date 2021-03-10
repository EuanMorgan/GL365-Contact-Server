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
    from: "euanmorgan48@gmail.com",
    to: "euanmorgan48@gmail.com",
    subject: subject,
    text: `Submission of Contact Form:\nName: ${name}\nEmail:${email}\nSubject:${subject}\n\nMessage:\n${plainMessage}`,
    html: `<p style="font-weight:bold">
    <u>Submission of Contact Form:</u>
    </p><p style="font-weight:bold"> 
    <u>Name:</u> ${name}</p><br/>
    <p style="font-weight:bold"> <u>Email:</u> <a href="mailto:${email}">${email}</a></p><br/>
    <p style="font-weight:bold"> <u>Subject:</u> ${subject}</p><br/><p style="font-weight:bold"><u>Message:</u><br/> ${message}</p>`,
  };
  try {
    await transporter.sendMail(mailOptions);
    return "success";
  } catch (error) {
    return "error";
  }
};

module.exports = { send };
