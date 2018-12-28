const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes/index');
const nodemailer = require('nodemailer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'pug');

app.use(express.static('./public',));

app.use('/', router);

app.post('/contactus/send', (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'kenethsimon@gmail.com',
            pass: 'KELTcul1995',

        }
    });
    const mailOptions = {
        from: 'msafiritours <msafiritours.com>',
        to: 'kenethsimon@gmail.com',
        subject: 'booking inquiry',
        text: 'you have an message with the following details Name: '+req.body.name+'Email: '+req.body.email+ 'Message: '+req.body.message,
        html: '<p>you have an message with the following details...</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li><li>phone number: '+req.body.phone+'</li><li>number of people: '+req.body.number+'</li></ul>'
    };
    transporter.sendMail(mailOptions, function(error, info){
       if(error){
           console.log(error);
           res.redirect('/');
       }else{
           console.log('message sent'+info.response);
           res.redirect('/');
       }
    });

    });

app.listen(process.env.PORT || 3000);

console.log('your app is running at 3000');