// thismodule will handle finding of one user
/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Constructor} User
 */
const handleGetUsers = function (req, res, User) {
  // find a user by id
  User.find({}, (err, users) => {
    // if an error occured, throw it
    if (err) throw err
    // send back the user
    res.status(200).send(users)
  })
}
// export the function for further usage
module.exports = handleGetUsers
