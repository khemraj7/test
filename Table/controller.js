const Table = require('./model')
//create table
const createProduct = async (req, res) => {
  try {
    const create = await Table.create(req.body)
    res.json({
      status: 201,
      product: create,
    })
  } catch (error) {
    res.json({
      status: 404,
      error: error,
    })
  }
}
//get All table

const getProduct = async (req, res) => {
  try {
    // console.log(req.body)
    const get = await Table.find()
    res.json({
      status: 200,
      product: get,
    })
  } catch (error) {
    res.json({
      status: 404,
      error: error,
    })
  }
}
//delete Table
const deleteProduct = async (req, res) => {
  try {
    // console.log(req.body)
    const deleteTable = await Table.findByIdAndDelete(req.params.id)
    res.json({
      status: 204,
      table: 'no Content',
    })
  } catch (error) {
    res.json({
      status: 404,
      error: error,
    })
  }
}
const updateProduct = async (req, res) => {
  try {
    // console.log(req.body)
    let body = req.body
    let productId = req.params.id
    let set = {}
    if (body.productName) set['productName'] = body.productName
    if (body.price) set['price'] = body.price

    const updateProduct = await Table.findByIdAndUpdate(productId, { $set: set }, { new: true })

    res.json({
      status: 204,
      product: updateProduct,
    })
  } catch (error) {
    res.json({
      status: 404,
      error: error,
    })
  }
}

module.exports = {
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
}
