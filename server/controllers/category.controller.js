const Category = require('../models/category')

/**
 * Get all categories
 * 
 * @param req
 * @param res
 * 
 * @returns void
 * 
 */
exports.getCategories = async function getCategories(req, res) {
  try {
    const categories = await Category.find().exec()

    res.status(200).json({ categories })
  } catch (err) {
    res.status(500).send({ error: err.message })  
  }
}
