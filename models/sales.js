/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')

/* Step 1 alternative
 *
 * TODO: make a global variable to act as an in memory database. 
 * NOTE: doing this WILL NOT persist your data and you will loose
 * your data once you stop running your server.
 *
 */
// global.sampleModel = [];

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */

const salesSchema = new mongoose.Schema({
    month: String,
    year: Number,
    amount: Number
    }
)

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const salesCollection = mongoose.model('Sales', salesSchema)

// function createSales(){
//     return salesCollection.create({
//     month: "August",
//     year: 2019,
//     amount: 2900
//     }); 
// }

function getAllSales() {
  return salesCollection.find()
}

function getOneSale(id){
  return salesCollection.findById(id)
}

function addOneSale(newSales){
  return salesCollection.create(newSales)
}

function updateSale(id, salesInfo){
  return salesCollection.findByIdAndUpdate(id, saleInfo)
}

function deleteSaleInfoById(id){
  return salesCollection.findByIdAndDelete(id)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
//   createSales,
  getAllSales,
  getOneSale,
  addOneSale,
  updateSale,
  deleteSaleInfoById
}
