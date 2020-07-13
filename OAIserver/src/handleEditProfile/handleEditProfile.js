// thismodule will handle the editing of a users profile
/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Constructor} User
 */
let changePassword = require('../handleUpdatePassword/handleUpdatePassword')
const handleEditProfile = function (req, res, next, User, bcrypt) {
  const {
    name,
    phone,
    email,
    oldPassword,
    newPassword,
    profile,
    dob,
    profession,
    gender,
    country

  } = req.body
  // find the user with email and update then execute the callback function
  User.updateOne(
    { email: req.body.email },
    { $set: { name, phone, email, profile, dob, profession, gender, country } },
    (err, response) => {
      if (err) {
        // throw an errr if it occurs
        throw err
      }
      if (oldPassword && newPassword) {
        changePassword(req, res, next, User, bcrypt).then(result => {
          res.status(200).send({ passwordChanged: { status: result === false ? 'error' : 'success' }, ...req.body })
        })
      } else {
        res.status(200).send({ ...req.body })
      }
      // send back the updated user
      // console.log(passwordChanged);
    }
  )
}
// export the function for further usage
module.exports = handleEditProfile
