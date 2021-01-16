const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const generator = require('generate-password');
const mailer=require('nodemailer');
const msg=require('../constant');
const saltRounds=10;

async function mail(email, hash)
{
    console.log(email,hash);
    var mailOpts, smtpTrans;

    //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
    smtpTrans = mailer.createTransport({
        service: 'gmail',
         host:'smtp.gmail.com',
         port:465,
        secure:true,
        auth: {
            user: msg.const.USER,
            pass: msg.const.PASSWORD
        }
    });
    var mailoutput = msg.const.CHANGE_PASSWORD(hash);
    //Mail options
    mailOpts = {
        to: email,
        subject: "passoword changed",
        html: mailoutput
    };

    smtpTrans.sendMail(mailOpts, function (error, res) {
        if (error) {
            // res.send("Email could not send due to error" +error);
            return console.log(error);
        }
    });
    console.log('Message sent successfully!');

}

module.exports={
    login:async (req, res)=>{
        let data=await req.models.users.findAll({where: {
            email: req.body.email
          }});

         const val=await bcrypt.compare(req.body.password, data[0].password);
         if(val)
         {
          const token= await jwt.sign({
                    data: req.body.email
                }, 'secret', { expiresIn: '1h' });
            res.status(200).send({'token':token});  
         }
        
         else{
             res.status(400).send('incorrect passwor or username');
         }
    },

    forgetpassword: async (req, res)=>{
        const password = generator.generate({
            length: 10,
            numbers: true
        });
        console.log(">>>>>>>>>>>",req.body.email);
        const hash=await bcrypt.hash(password, saltRounds);

        let data=await req.models.users.update({password:hash},
           { where:{
            email: req.body.email
        }}).then(function(data, err)
        {
            if(data)
            {
                mail(req.body.email, hash);
            }
            if(err)
            res.status(400).send({'invalid username':err});
        })

    }
}