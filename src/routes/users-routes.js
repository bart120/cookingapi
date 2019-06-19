let controller = require('../controllers/users-controller');
let express = require('express');

let router = express.Router();

router.route('/')
    .get(controller.getAllUsers)
    .post(controller.createUser);



router.route('/:id')
    .get(controller.getUserById)
    //.put(controller.updateUser)
    .delete(controller.deleteUser);

module.exports = router;