// thismodule will handle finding of one user
/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Constructor} User
 */
const handleDeleteUser = function (req, res, User) {
  // find a user by id
  User.deleteOne({ _id: req.params.id }, (err, result) => {
    // if an error occured, throw it
    if (err) throw err
    // send back the user
  
    res.status(200).send(result)
  })
}
// export the function for further usage
module.exports = handleDeleteUser
