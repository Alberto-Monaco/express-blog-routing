const express = require('express')
const router = express.Router()
const postsControllers = require('../controllers/postsControllers.js')

router.get('/:slug', postsControllers.show)

module.exports = router
