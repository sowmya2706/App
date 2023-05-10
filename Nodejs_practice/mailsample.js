
const nodemailer = require('nodemailer');

const sendMail = async function (mailModel) {
    try {
        const transporter = nodemailer.createTransport({
           
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: false,
            auth: {
                user: 'sowmyaramesh2706@gmail.com',			//email ID
                 pass: 'qdcrwsyeymoimamk'

            },

        });

        return new Promise(function (resolve, reject) {
            let mailOptions = {
                from: mailModel.from || 'default email',
                to: mailModel.to,
                subject: mailModel.subject,
                html: mailModel.html
            };
            transporter.sendMail(mailOptions, function (err, info) {

                mailOptions.err = err;
                mailOptions.info = info;
                mailOptions.status = (info !== null || info !== undefined);
                if (err) {
                    console.log(err);
                    reject(err);

                } else {
                    console.log(info);
                    resolve(info);
                }
            });
        });
    } catch (error) {
        console.log("email Error :", error);
        return Promise.reject(error)
    }

}

const genrateOTP = () => {

    let otpCode = Math.floor((Math.random()*10000)+1);
    console.log("otpcode is",otpCode)
    return otpCode.toString();
}
const otp = genrateOTP()
console.log("here",otp)

sendMail({
    to: 'sow27june@gmail.com',
    subject: 'OTP',
    html: otp
})
