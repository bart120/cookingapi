"use strict"

// GET '/'
function getAllRecipes(req, resp) {
    resp.json("");
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



