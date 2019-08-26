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
const petApi = require('./pets.js')
// const {petSchema} = require('./pets.js')
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
const ObjectId= mongoose.ObjectId
const locationSchema = mongoose.Schema({
    state: String,
    city: String,
    hourStart: Number,
    hourEnd: Number,
    shopId: ObjectId
    // pets:[petApi.petSchema]
        // },
        // {timestamps: {
        //     createdAt: 'Start_Time',
        //     updatedAt: 'End Time'
        //     }
        // }
        // {timestamps: {updateAt : 'End Time'
        // }
    }
    
)

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const locationCollection = mongoose.model('Location', locationSchema)

// function createLocation(){
//     return locationCollection.create({
//         state: "Texas",
//         city: "Houston",
//         hourStart: 12,
//         hourEnd: 9,
//         // shopId: mongoose.Types.ObjectId()
//         // pets:[petApi.petSchema]
//     }); 
// }

// createLocation();

function getAllLocations() {
  return locationCollection.find()
}

function getOneLocation(id){
  return locationCollection.findById(id)
}

function addOneLocation(newLocation){
  return locationCollection.create(newPet)
}

function updateLocation(id, locationInfo){
  return locationCollection.findByIdAndUpdate(id, locationInfo)
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
//   createLocation,
  getAllLocations,
  getOneLocation,
  addOneLocation,
  updateLocation,
  deleteLocationInfoById
}
