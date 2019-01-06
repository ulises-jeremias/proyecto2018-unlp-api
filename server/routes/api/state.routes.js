const { Router } = require('express')

const StateController = require('../../controllers/state.controller')

const router = Router()

router.route('/').get(StateController.getStates)

module.exports = router