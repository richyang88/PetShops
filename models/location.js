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

const locationSchema = new mongoose.Schema({
 state: String,
 city: String,
 hourStart: Number,
 hourEnd: Number
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const locationCollection = mongoose.model('Pet', locationSchema)


function getAllLocations() {
  return locationCollection.find()
}

function getOneLocation(id){
  return locationCollection.findById(id)
}

function addOneLocation(newPet){
  return locationCollection.create(newPet)
}

function updateLocation(id, petInfo){
  return locationCollection.findByIdAndUpdate(id, petInfo)
}

function deleteLocationInfoById(id){
  return locationCollection.findByIdAndDelete(id)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllLocations,
  getOneLocation,
  addOneLocation,
  updateLocation,
  deleteLocationInfoById
}
