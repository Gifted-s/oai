// this module will handle the signing in of user
/**
 *handleSignin function
 * @param {Object} req
 * @param {Object} res
 * @param {Contructor} User
 */
const handleMessage = function (req, res, User) {
  // destructure the req.body object
  const { title, text } = req.body
  // this function will validate the user signing in
  User.find({ approved: true })
    .then(users => {
      let emails = []
      for (let i = 0; i < users.length; i++) {
        emails.push(users[i].email)
      }
      console.log(emails)
      var nodemailer = require('nodemailer')
      let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS
        }
      })

      let helperfunction = {

        from: '"One Africa Initiative" <sunkanmiadewumi1@gmail.com',
        to: emails,
        subject: title,
        html: `<h1 style="color: green;font-family: Verdana;font-size: 300%;">OAI</h1>
                <h2>${title}</h2>
                <p>${text} </p>
              `

      }
      // send an email to user verify email account
      transporter.sendMail(helperfunction, (err, info) => {
        if (err) {
          // check if an error occur and log it to console
          console.log(err)
          return res.send({ error: 'message not sent due slow internet connection' })
        }
        console.log(info)
       return res.send({ message: 'message sent' })
      })
      //  send a response to user asking him or her to validate email
    })
  // check is the email of the user is not valid

  // this function validate a user password

  // find user with entered email
}
// export function for further usage
module.exports = handleMessage
