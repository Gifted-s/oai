// this module will update users eventSchedule details
/**
 * handleUpdateEvent
 * @param {Object} req
 * @param {Object} res
 * @param {Constructor} User
 */
const handleUpdateEvent = function (req, res, User) {
  console.log(req.body)
  // update the user eventSchedule field
  // find the user by id and execute the callback
  User.findById({ _id: req.params.id }, (err, user_) => {
    // throw error if it occurs
    if (err) throw err
    // push the event scheduled to user record
    if (user_.eventSchedule) {
      user_.record.push(user_.eventSchedule)
    }
    // save to database
    user_.save().then(() => {
      User.updateOne({ _id: req.params.id }, { $set: { eventSchedule: { ...req.body } } }, (err, result) => {
        // checking if errr occur
        if (err) throw err
        console.log(result)
        // send updated info
        res.status(200).send(result)
      })
    })
  })
}
// export function for further usage
module.exports = handleUpdateEvent
