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
  <p>A poruka glasi: </p>
  <p> ${req.body.message} </p>`

  nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'zion.namestaj@gmail.com',
        pass: 'Zion1234'
      }
    })

    // setup email data with unicode symbols
    let mailOptions = {
      from: '"Zion"', // sender address
      to: 'zion.namestaj.1404@gmail.com', // list of receivers
      subject: 'Nova poruka', // Subject line
      html: message // html body
    }

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error)
      }
      res.send('Poruka je poslata')
    })
  })
})

const port = process.env.PORT || 3000
app.listen(port)
console.log('server started '+ port)
