"use strict"
let express = require('express');
let mongoose = require('mongoose')

//mid
let recipesRoutesMid = require('./routes/recipes-routes');

let app = express();



app.use('/api/recipes', recipesRoutesMid);


app.get('/', (req, resp) => {

    resp.json({ name: "toto" });
});




app.listen(8888);
module.exports = app;


