// const keys = require("../config/keys");
const nodemailer = require('nodemailer');

let smtpTransport = nodemailer.createTransport({
    host: process.env.MAIL_HOST || "smtp.gmail.com",
    secure: process.env.MAIL_SECURITY || false,
    port: process.env.MAIL_PORT || 465,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PWD
    },
    tls: {
        rejectUnauthorized: false
    }
});

let mailOptions = {
    from: 'cases@justify.com'
};

function setMailOptions (optionObj) {
    for (let key in optionObj) {
        mailOptions[key] = optionObj[key];
    }
}

module.exports = async (mOpt) => {
    setMailOptions(mOpt);
    await smtpTransport.sendMail(mailOptions);
};