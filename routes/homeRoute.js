const express = require('express')
const { getSearchedRecipes, getAllRecipes, similarRecipe, getInformation, getTips, getAllTags } = require('../controllers/homeController')

const homeRoute = express.Router()

homeRoute.get('/', getAllRecipes)
homeRoute.get('/search', getSearchedRecipes)
homeRoute.get('/similar/:id', similarRecipe)
homeRoute.get('/recipe-info/:id', getInformation)
homeRoute.get('/tips/:id', getTips)
homeRoute.get('/tags', getAllTags)

module.exports = homeRoute