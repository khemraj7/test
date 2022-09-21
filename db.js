const mongoose = require('mongoose')

const database = mongoose
  .connect(`mongodb+srv://locad:locad@cluster0.xpe48nu.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    console.log('connected database')
  })
  .catch((error) => {
    console.log('Disconnected ...')
  })

module.exports = database
