let users = require('../models/user-model');
// GET /
exports.getAllUsers = (req, resp) => {
    users.find({}, (err, data) => {
        resp.json(extractData(err, data));
    });
};

// GET /:id
exports.getUserById = (req, resp) => {
    console.log(`ID: ${req.params.id}`);
    users.findById(req.params.id, (err, data) => {
        resp.json(extractData(err, data));
    });
};


//DELETE /:id
exports.deleteUser = (req, resp) => {
    users.remove({ _id: req.params.id }, (err, data) => {
        if (err)
            resp.json(err);
        resp.json({ 'message': 'User successfully deleted' });
    })
};

function extractData(err, data) {
    if (err)
        return err;
    return data;
}
