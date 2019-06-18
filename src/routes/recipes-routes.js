let controller = require('../controllers/recipes-controller');
let express = require('express');

let router = express.Router();

router.route('/')
    .get(controller.getAllRecipes)
    .post(controller.createRecipe);



router.route('/:id')
    .get(controller.getRecipeById)
    .put(controller.updateRecipe)
    .delete(controller.deleteRecipe);

module.exports = router;