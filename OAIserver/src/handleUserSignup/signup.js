// this module will handle user signup
/**
 * handleSignup
 * @param {Object} req
 * @param {Object} res
 * @param {Object} User
 */
const handleSignup = function (req, res, User) {
  // find user with enterd email and executing the callback function
  User.findOne({ email: req.body.email }).then((user) => {
    // checking if email has been used
    if (user && user.validMail) {
      // send a response to user that email has been used
      return res.status(400).send({ error: 'Email has been used by someone else or you, try to login' })
    }
    // checking if there is a user but has not validated the email
    else if (user && !user.validMail) {
      User.deleteMany({ email: req.body.email }).then(results => {
        console.log(results)
      })
    }
    // checking the number of tries made by user
    if (req.body.retries > 0) {
      // find the previously added user and delete
      User.deleteOne({ email: req.body.email }).then(result => {
        console.log(result)
      })
    }
    // create new instance of User
    const newUser = new User({ ...req.body })
    console.log(newUser)
    // has password
    newUser.password = newUser.hashPassword(newUser.password)
    // save user to database
    newUser.save()
      .then((user) => {
        var nodemailer = require('nodemailer')
        let transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
          }
        })

        let helperfunction = {

          from: '"One Africa Initiative Foundation" <sunkanmiadewumi1@gmail.com',
          to: req.body.email,
          // https://accounts.google.com/b/0/DisplayUnlockCaptcha
          subject: 'Email verification',
          html: `<h1 style="color: green;font-family: Verdana;font-size: 300%;">OAI</h1>
               <p>Welcome to One African Initiative Foundation, thank you for signing up with us. Please click on the button below to confirm your email account </p>
          <a style="color:white" href="https://oaiapi.herokuapp.com/validate-email/${user._id}"><button style="color:white;padding:20px; border:none; border-radius:5px; background:green; font-size:15px; font-weight:bold;">Confirm Email</button></a>
          `

        }
        // send email to user to verify email
        transporter.sendMail(helperfunction, (err, info) => {
          let helperfunction2 = {

            from: '"One Africa Initiative Foundation" <sunkanmiadewumi1@gmail.com',
            to: 'sunkanmiadewumi1@gmail.com',
            // https://accounts.google.com/b/0/DisplayUnlockCaptcha
            subject: 'User Authorization',
            html: `<h1 style="color: green;font-family: Verdana;font-size: 300%;">OAI</h1>
                 <h3>A User just signed up and needs an authorization </h3>

                 <p>Name: ${req.body.name} </p>
                 <p>Email: ${req.body.email}</p>
                 <p>Country: ${req.body.country}</p>
                 <p>Profession: ${req.body.profession}</p>
                 <p>Profile: ${req.body.profile} </p>
            <a style="color:white" href="https://oaiapi.herokuapp.com/validate-user/${user._id}"><button style="color:white;padding:20px; border:none; border-radius:5px; background:green; font-size:15px; font-weight:bold;">Authorize user</button></a>
            `

          }
          transporter.sendMail(helperfunction2, (err, info) => {
            if (err) { console.log(err) }
            console.log(info)
          })
          // checking for error
          if (err) {
            // send a response to user that an error occured will sending mail
            console.log(err)
            return res.status(500).send({ error: 'Could not send mail check network connection' })
          }
          // send a response that an email has been sent to validate mail
          res.status(201).send({ isAvailable: true, message: 'A message has been sent to your email, please check it out to validate your email account' })
        })
      })
      // checking for errors
      .catch(err => {
        console.log(err)
      })
  })
}
// export function for further usage
module.exports = handleSignup
