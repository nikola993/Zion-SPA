const express = require('express')
const gzipStatic = require('connect-gzip-static')
const helmet = require('helmet')
const nodemailer = require('nodemailer')
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS
const app = express()

app.use(helmet())
app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301))

app.use(gzipStatic(__dirname + '/dist'))

const bodyParser = require('body-parser')
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/send', (req, res) => {
  const message = `
  <h3>Gospodine Aksentijevicu dobili ste novu poruku</h3>
  <p>Ime: ${req.body.name}</p>
  <p>Email: ${req.body.email}<p>
  <p>Text: </p>
  <p> ${req.body.message} </p>`

  nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: account.user, // generated ethereal user
        pass: account.pass // generated ethereal password
      }
    })

    // setup email data with unicode symbols
    let mailOptions = {
      from: '"Zion"', // sender address
      to: 'foo@example.com', // list of receivers
      subject: 'Nova poruka', // Subject line
      html: message // html body
    }

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error)
      }
      console.log('Message sent: %s', info.messageId)
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      res.send('Poruka je poslata')
    })
  })
})

const port = process.env.PORT || 3000
app.listen(port)
console.log('server started '+ port)
