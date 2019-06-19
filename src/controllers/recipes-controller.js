"use strict"
const recipe = require('../models/recipe-model');
const mongoose = require('mongoose');
const cachegoose = require('cachegoose');

cachegoose(mongoose);

// GET '/'
function getAllRecipes(req, resp) {
    /*recipe.find({}, (err, data) => {
        resp.json(data);
    });*/

    // test();
    /*recipe.find({}).then(
        (data) => {
            resp.json(data);
        }
    );*/

    recipe.find({})
        .cache(0, 'RECIPE-CACHE-KEY')
        .exec()
        .then(
            (data) => {
                resp.json(data);
            }
        );
}

function traitement(resolve, reject) {
    console.log('traitement');
    const r = Math.random() * 100;
    if (Math.floor(r) % 2 === 1) {
        resolve(r);
    } else {
        reject({ message: `valeur de r: ${r}` });
    }
}

function test() {
    const prom = new Promise(traitement)
        .then((num) => { console.log(`promise resolve: ${num}`) })
        .catch((err) => { console.log(`promise reject: ${err.message}`) });

}

// GET '/:id'
exports.getRecipeById = (req, resp) => {
    const id = req.params.id;
    resp.json({ id });
}

// POST '/'
exports.createRecipe = (req, resp) => {
    console.log(req.body);
    const obj = new recipe(req.body);
    obj.save()
        .then(
            data => {
                resp.status(201).json(data);
                cachegoose.clearCache('RECIPE-CACHE-KEY');
            }
        ).catch(err => {
            console.log(err);
            resp.status(400).json({ message: err.message || err })
        });
}

// PUT '/:id'
exports.updateRecipe = (req, resp) => {
    const id = req.params.id;
    const obj = req.body;
    if (obj._id !== id) {
        resp.status(400).end();
        return;
    } else {
        recipe.findByIdAndUpdate(id, obj, { new: true })
            .then(data => {
                cachegoose.clearCache('RECIPE-CACHE-KEY');
                resp.json(data);
            })
            .catch(err => resp.status(400).json(err));
    }
}

// DELETE '/:id'
exports.deleteRecipe = (req, resp) => {
    const id = req.params.id;
    recipe.deleteOne({ _id: id })
        .then((data) => {
            if (data.deletedCount == 0)
                resp.status(400).json({ message: `${data.deletedCount} élément supprimé.` })
            else
                resp.status(200).json({ message: `${data.deletedCount} élément supprimé.` })
        })
        .catch((err) => resp.status(400).json({ message: `Error: ${err}` }));
}

exports.getAllRecipes = getAllRecipes;



