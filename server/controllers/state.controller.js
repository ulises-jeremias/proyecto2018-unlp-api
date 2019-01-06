const State = require('../models/state')

/**
 * Get all states
 * 
 * @param req
 * @param res
 * 
 * @returns void
 *
 */
exports.getStates = async function getStates(req, res) {
  try {
    const states = await State.find().exec()

    res.status(200).json({ states })
  } catch (err) {
    res.status(500).send({ error: err.message })  
  }
}
