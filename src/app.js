"use strict"
let express = require('express');
let mongoose = require('mongoose')

//mid
let bodyParser = require('body-parser');
let recipesRoutesMid = require('./routes/recipes-routes');
let usersRoutesMid = require('./routes/users-routes');

let cors = require('cors');

let authController = require('./controllers/authentication-controller');

//auth
let auth = require('./utils/validate-token');

//conf
let conf = require('./configurations/config-mongo');

let app = express();

app.use(cors());

mongoose.connect(conf.database);
// mongoose.Promise = global.Promise; V4

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', auth.validateToken);

app.use('/api/recipes', recipesRoutesMid);
app.use('/api/users', usersRoutesMid);

app.post('/authentication', authController);


app.get('/', (req, resp) => {

    resp.write('OK');
});




app.listen(8080);
module.exports = app;


