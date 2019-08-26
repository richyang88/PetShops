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

//to add pets
petRouter.get('/addPet', (req,res)=>{
  petApi.addOnePet(req.params.petId).then((petInDbObj)=>{
    res.render('./petShop/createPetHBS', {petInDbObj})
  })
})

//get id for Pets
petRouter.get('/pet/:petId', (req,res)=>{
  const petId = petApi.getOnePet(req.params.petId)
   petId.then((petFromDb)=>{
    console.log(petFromDb)
    res.render('petShop/editPetHBS', {petFromDb: petFromDb})
  })
})

//to add shops
petRouter.get('/addShop', (req,res)=>{
  locationApi.addOneLocation(req.params.shopId).then((shopInDbObj)=>{
    res.render('./shops/createShopHBS', {shopInDbObj})
  })
})

// get id for Shops
petRouter.get('/shop/:shopId', (req,res)=>{
  const shopId = locationApi.getOneLocation(req.params.shopId)
   shopId.then((shopFromDb)=>{
    console.log(shopFromDb)
    res.render('shops/editShopHBS', {shopFromDb: shopFromDb})
  })
})

//post for pets
petRouter.post('/post', (req,res)=>{
  petApi.addOnePet(req.body).then((addOne)=>{
    res.redirect('/listAll')
  })
})

//post for Shops
petRouter.post('/shop/post', (req,res)=>{
  locationApi.addOneLocation(req.body).then((addOne)=>{
    res.redirect('/listAll')
  })
})

//update for pets
petRouter.put('/:petId', function(req,res){
  petApi.updatePet(req.params.petId, req.body).then((update)=>{
    res.redirect('/listAll')
  });
})

//update for shop
petRouter.put('/shop/:shopId', function(req,res){
  locationApi.updateLocation(req.params.shopId, req.body).then((update)=>{
    res.redirect('/listAll')
  });
})

//delete for pets
petRouter.delete('/pet/:petId', (req,res) =>{
  petApi.deletePetInfoById(req.params.petId).then((deleteThis)=>{
    console.log(req.params.petId)
    res.redirect('/listAll')
  })
})

//delete for shops
petRouter.delete('/shop/:shopId', (req,res) =>{
  locationApi.deleteLocationInfoById(req.params.shopId).then((deleteThis)=>{
    console.log(req.params.shopId)
    res.redirect('/listAll')
  })
})




/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  petRouter
}
