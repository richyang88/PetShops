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
const petSchema = new mongoose.Schema({
 name: String,
 type: String,
 age: Number,
 gender: String,
 status: String
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const petCollection = mongoose.model('Pet', petSchema)

// function createPet() {
//   return petCollection.create({
//     name: "Bob",
//     type: "Cat",
//     age: 2,
//     gender: "Female",
//     status: "Adopted"
//    }); 
//    console.log("created")
// }

// createPet();

function getAllPets() {
  return petCollection.find()
}

function getOnePet(id){
  return petCollection.findById(id)
}

function addOnePet(newPet){
  return petCollection.create(newPet)
}

function updatePet(id, petInfo){
  return petCollection.findByIdAndUpdate(id, petInfo)
}

function deletePetInfoById(id){
  return issueCollection.findByIdAndDelete(id)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  // createPet,
  getAllPets,
  getOnePet,
  addOnePet,
  updatePet,
  deletePetInfoById,
  petSchema
}
