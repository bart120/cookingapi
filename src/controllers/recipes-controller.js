"use strict"
let recipe = require('../models/recipe-model');

// GET '/'
function getAllRecipes(req, resp) {
    /*recipe.find({}, (err, data) => {
        resp.json(data);
    });*/

    recipe.find({}).then(
        (data) => {
            resp.json(data);
        }
    );
}

// GET '/:id'
exports.getRecipeById = (req, resp) => {
    const id = req.params.id;
    resp.json({ id });
}

// POST '/'
exports.createRecipe = (req, resp) => {

}

// PUT '/:id'
exports.updateRecipe = (req, resp) => {

}

// DELETE '/:id'
exports.deleteRecipe = (req, resp) => {

}

exports.getAllRecipes = getAllRecipes;



