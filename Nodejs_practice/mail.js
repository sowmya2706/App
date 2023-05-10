// const nodemailer = require("nodemailer");
// async function main() {
// let testAccount = await nodemailer.createTestAccount();
// console.log("testaccount",testAccount)
// let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, 
//     auth: {
//       user: testAccount.user, 
//       pass: testAccount.pass,
//     },
// });
// console.log("sowmyaaaaaaaaaaaaaaaa")
// console.log("transporterersdggggwrtert",transporter);

// let info = await transporter.sendMail({
//   from: "ywlgxig4e2jgjlwj@ethereal.email", 
//   to: "sow27june@gmail.com", 
//   subject:"testing", 
//   text: "testing otp generation"
// });
// // console.log("info is",info);

// // console.log("Message sent: %s", info.messageId);


// // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

// }

// main().catch(console.error);



// const nodemailer = require('nodemailer');
// const SMTPTransport = require('nodemailer/lib/smtp-transport');

// // Generate SMTP service account from ethereal.email
// nodemailer.createTestAccount((err, account) => {
//     if (err) {
//         console.error('Failed to create a testing account. ' + err.message);
//         return process.exit(1);
//     }

//     console.log('Credentials obtained, sending message...');

//     // Create a SMTP transporter object
//     console.log("account is",account)
//     let transporter = nodemailer.createTransport({
//         host: "smtp.ethereal.email",
//         port: "587",
//         secure: "false",
//         tls:{
//             rejectUnauthorized:false,
//         },
//         auth: {
//             user:"na2sle5ipgcpqqeo",
//             pass: "bEgwGNeQwfAHpbut8E"
//         }

       
//     });
    

//     // Message object
//     let message = {
//         from: 'sender@example.com',
//         to: 'recipient@example.com>',
//         subject: 'Nodemailer is unicode friendly ✔',
//         text: 'Hello to myself!',
//         html: '<p><b>Hello</b> to myself!</p>'
//     };

//     transporter.sendMail(message, (err, info) => {
//         if (err) {
//             console.log('Error occurred. ' + err.message);
//             return process.exit(1);
//         }

//         console.log('Message sent: %s', info.messageId);
//         // Preview only available when sending through an Ethereal account
//         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
//     });
// });


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'sowmyaramesh2706@gmail.com',			//email ID
	    pass: 'akoextrftxxivyjz'				//Password 
    }
});
function sendMail(email , otp){
	var details = {
		from: 'sowmyaramesh2706@gmail.com', // sender address same as above
		to: 'sowmyaramesh2706@gmail.com', 					// Receiver's email id
		subject: 'Your demo OTP is ', // Subject of the mail.
		html: otp					// Sending OTP 
	};


	transporter.sendMail(details, function (error, data) {
		if(error)
			console.log(error)
		else
			console.log(data);
		});
	}
	
	var email = "info@nodejsera.com";
	var otp = "123456";
	sendMail(email,otp);	