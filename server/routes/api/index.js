const { Router } = require('express')

const router = Router()

router.use('/categorias', require('./category.routes'))
router.use('/consultas', require('./query.routes'))
router.use('/estados', require('./state.routes'))

module.exports = router