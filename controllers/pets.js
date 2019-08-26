/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const petApi = require('../models/pets.js')
const locationApi = require('../models/location.js')
const salesApi = require('../models/sales.js')
// var helpers = require('handlebars-helpers')();

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const petRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */
// petRouter.get('/')


petRouter.get('/listAll', (req, res) => {
  const allPets = petApi.getAllPets();
  const allLocal = locationApi.getAllLocations();
  const allSales = salesApi.getAllSales();
  allPets.then((petInDbObj) => {
    allLocal.then((locationsInDbObj) => {
      allSales.then((salesInDbObj)=>{
        // console.log(locationsInDbObj)
        // console.log(salesInDbObj)
        res.render('./petShop/allPetHBS', { petInDbObj, locationsInDbObj, salesInDbObj });
      }) //passing in sales.js
    })//passing in location.js
  });//passing in pets.js
})

// petRouter.get('/createPet', (req, res) => {
//   const createpets = petApi.createPet();
//   createpets.then((newInDb)=>{
//     res.send(newInDb);
//   })
// })

petRouter.get('/addPet', (req,res)=>{
  petApi.addOnePet(req.params.petId).then((petInDbObj)=>{
    res.render('./petShop/createPetHBS', {petInDbObj})
  })
})

// //petID on 59 must match petId on line 60
// petRouter.get('/:petId', (req,res)=>{
//   const petById = petApi.getOnepet(req.params.petId)

//   petById.then((petFromDb)=>{
//     console.log(petFromDb)
//     res.render('pets/editpetHBS', {petFromDb: petFromDb})
//   })
// })


petRouter.post('/post', (req,res)=>{
  petApi.addOnePet(req.body).then((addOne)=>{
    res.redirect('/listAll')
  })
})

petRouter.put('/:petId', function(req,res){
  petApi.updatepetById(req.params.petId, req.body).then((update)=>{
    res.redirect('/listpets')
  });
})

// petRouter.delete('/:petId', (req,res) =>{
//   petApi.deletepetById(req.params.petId).then((deleteThis)=>{
//     console.log(req.params.petId)
//     res.redirect('/listpets')
//   })
// })




/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  petRouter
}
