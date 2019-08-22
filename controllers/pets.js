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
// issueRouter.get('/')


petRouter.get('/listAll', (req, res) => {
  const allPets = petApi.getAllPets();
  const allLocal = locationApi.getAllLocations();
  allPets.then((petInDbObj)=>{
    res.render('./petShop/allPetHBS', {petInDbObj});
  });
  // allLocal.then((locationsInDbObj)=>{
  //   res.render('./petShop/allPetHBS', {locationsInDbObj});
  // })

})

// issueRouter.get('/createPet', (req, res) => {
//   const createIssues = petApi.createIssues();
//   createIssues.then((newInDb)=>{
//     res.send(newInDb);
//   })
// })

// issueRouter.get('/addPet', (req,res)=>{
//   issueApi.addOneIssue(req.params.issueId).then(()=>{
//     res.render('./issues/issueAddHBS', {})
//   })
// })

// //issueID on 59 must match issueId on line 60
// issueRouter.get('/:issueId', (req,res)=>{
//   const issueById = issueApi.getOneIssue(req.params.issueId)
  
//   issueById.then((issueFromDb)=>{
//     console.log(issueFromDb)
//     res.render('issues/editIssueHBS', {issueFromDb: issueFromDb})
//   })
// })


// issueRouter.post('/post', (req,res)=>{
//   issueApi.addOneIssue(req.body).then((addOne)=>{
//     // res.send(addOne)
//     res.redirect('/listIssues')
//   })
// })

// issueRouter.put('/:issueId', function(req,res){
//   issueApi.updateIssueById(req.params.issueId, req.body).then((update)=>{
//     res.redirect('/listIssues')
//   });
// })

// issueRouter.delete('/:issueId', (req,res) =>{
//   issueApi.deleteIssueById(req.params.issueId).then((deleteThis)=>{
//     console.log(req.params.issueId)
//     res.redirect('/listIssues')
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
