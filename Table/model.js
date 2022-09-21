const mongoose = require('mongoose')

const tableSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})

const table = mongoose.model('table', tableSchema)

module.exports = table
