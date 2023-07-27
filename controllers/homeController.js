const axios = require('axios');

// getting all recipes
const getAllRecipes = async (req, res) => {
    const url = 'https://tasty.p.rapidapi.com/recipes/list';
    await axios.get(url, {
        params: {
            from: '0',
            size: '20',
            tags: 'under_30_minutes'
        }, headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    }).then((response) => {
        res.status(200).json(response.data)
    }).catch((error) => {
        res.status(400).json(error)
        console.error(error);
    })
}

// search results
const getSearchedRecipes = async (req, res) => {
    const searchedRecipe = req.body.searchedRecipe;
    const url = 'https://tasty.p.rapidapi.com/recipes/auto-complete';
    const prefix = searchedRecipe;

    const headers = {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    };
    await axios.get(url, {
        params: { prefix }, headers
    }).then((response) => {
        res.status(200).json(response.data)
    }).catch((error) => {
        res.status(400).json(error)
    })
}

// getting similar recipe using recipe id
const similarRecipe = async (req, res) => {
    const url = 'https://tasty.p.rapidapi.com/recipes/list-similarities';
    const headers = {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    };
    await axios.get(url, {
        headers, params: { recipe_id: req.params.id }
    }).then((response) => {
        res.status(200).json(response.data)
    }).catch((error) => {
        res.status(400).json(error)
    })
}

// getting more information concerning recipe of give id

const getInformation = async (req, res) => {
    const url = 'https://tasty.p.rapidapi.com/recipes/get-more-info'
    const headers = {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    };
    await axios.get(url, {
        headers, params: { id: req.params.id }
    }).then((response) => {
        res.status(200).json(response.data)
    }).catch((error) => {
        res.status(400).json(error)
    })
}
// getting recipe tips
const getTips = async (req, res) => {
    const url = 'https://tasty.p.rapidapi.com/tips/list';
    const headers = {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    };
    const params = {
        id: req.params.id,
        from: '0',
        size: '30'
    }
    await axios.get(url, { params, headers }).then((response) => {
        res.status(200).json(response.data)
    }).catch((error) => {
        res.status(400).json(error)
    })
}
// getting all supported tags
const getAllTags = async (req, res) => {
    const url = 'https://tasty.p.rapidapi.com/tags/list';
    const headers = {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    };
    await axios.get(url, { headers }).then((response) => {
        res.status(200).json(response.data)
    }).catch((error) => {
        res.status(400).json(error)
    })
}



module.exports = { getAllRecipes, getSearchedRecipes, similarRecipe, getInformation, getTips, getAllTags }