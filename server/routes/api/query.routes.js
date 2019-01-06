const { Router } = require('express')

const QueryController = require('../../controllers/query.controller')

const router = Router()

router.route('/')
  .get(QueryController.getQueries)
  .post(QueryController.addQuery)

router.route('/:id')
  .get(QueryController.getQuery)
  .delete(QueryController.deleteQuery)

module.exports = router