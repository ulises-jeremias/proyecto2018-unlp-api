const _ = require('underscore')

const Category = require('../models/category')
const Query = require('../models/category')
const State = require('../models/state')

/**
 * Get all queries
 * 
 * @param req
 * @param res
 * 
 * @returns void
 * 
 */
exports.getQueries = async function getQueries(req, res) {
  try {
    const queries = await Query.find()
      .populate('category')
      .populate('state')
      .exec()

    res.status(200).json({ queries })
  } catch (err) {
    res.status(500).send({ error: err.message })  
  }
}

/**
 * Get all queries
 * 
 * @param req
 * @param res
 * 
 * @returns void
 * 
 */
exports.addQuery = async function addQuery(req, res) {
  try {
    const {
      body: {
        query,
      }
    } = req

    if (_.isUndefined(query.email) || _.isUndefined(query.description) ||
        _.isUndefined(query.category) || _.isUndefined(query.status)
    ) {
      return res.status(400).end()
    }

    const query = new Query(query)

    /* TODO: Define add query */

  } catch (err) {
    res.status(500).send({ error: err.message })  
  }
}

/**
 * Get a single query by id
 * 
 * @param req
 * @param res
 * 
 * @returns void
 * 
 */
exports.getQuery = async function getQuery(req, res) {
  try {
    const query = await Query.findOne({ id: req.params.id })
      .populate('category')
      .populate('state')
      .exec()

    if (!query) {
      return res.sendStatus(404)
    }

    res.status(200).json({ query })
  } catch (err) {
    if (err.name === 'CastError') { 
      return res.sendStatus(400) 
    }

    return res.status(500).send(err)
  }
}

/**
 * Delete a query by id
 * 
 * @param req
 * @param res
 * 
 * @returns void
 * 
 */
exports.deleteQuery = async function deleteQuery(req, res) {
  try {
    const query = await Query.findOne({ id: req.params.id }).exec()

    if (!query) {
      return res.sendStatus(404)
    }

    await query.remove()

    res.sendStatus(200)
  } catch (err) {
    if (err.name === 'CastError') { 
      return res.sendStatus(400)
    }

    return res.status(500).send(err)
  }
}
  