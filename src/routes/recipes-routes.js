let controller = require('../controllers/recipes-controller');
let express = require('express');

let router = express.Router();

router.route('/').get(controller.getAllRecipes);

module.exports = router;