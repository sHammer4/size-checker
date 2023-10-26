const nodemailer = require("nodemailer");

// Create a transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAILP,
  },
});

const mailOptions = {
  from: process.env.EMAIL,
  to: process.env.EMAIL,
  subject: "Found Shoes",
  text: "Spiderman Shoes in size 11 have been found https://www.adidas.ca/en/ultra-4d-marvel-shoes/IG5337.html",
};

const notifyMyself = () => {
  console.log("Notifying user");
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

module.exports = {
  notifyMyself,
};
