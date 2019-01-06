const { Router } = require('express')

const CategoryController = require('../../controllers/category.controller')

const router = Router()

router.route('/').get(CategoryController.getCategories)

module.exports = router