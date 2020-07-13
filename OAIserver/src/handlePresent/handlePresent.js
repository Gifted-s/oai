// this module will update users eventSchedule details
/**
 * handleUpdateEvent
 * @param {Object} req
 * @param {Object} res
 * @param {Constructor} User
 */
const handlePresent = function (req, res, User) {
  // update the user eventSchedule field
  // find the user by id and execute the callback
  User.findById({ _id: req.params.id }, (err, user_) => {
    if (err) throw err
    if (!user_) {
      console.log('an error occured no user with this id')
      return res.status(200).send({ message: 'This event no longer exist' })
    }
    user_.eventSchedule.noPresent = user_.eventSchedule.noPresent + 1
    user_.save().then((result) => {
      console.log(result.eventSchedule)
      res.status(200).send({ result })
    })
  })
}
// export function for further usage
module.exports = handlePresent
