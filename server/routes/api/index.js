const { Router } = require('express')

const router = Router()

router.use('/consultas', require('./query.routes'))

module.exports = router