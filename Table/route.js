const express = require('express')
const controller = require('./controller')
const router = express.Router()

router.post('/create', controller.createProduct)
router.get('/get', controller.getProduct)
router.delete('/delete/:id', controller.deleteProduct)
router.patch('/update/:id', controller.updateProduct)

module.exports = router
