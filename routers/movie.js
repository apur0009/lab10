var Actor = require('../models/actor');
var Movie = require('../models/movie');
const mongoose = require('mongoose');
module.exports = {
    getAll: function (req, res) {
        Movie.find({}).populate('actors').exec(function (err, movies) {
            if (err) return res.status(400).json(err);
            res.json(movies);
        });
    },
    createOne: function (req, res) {
        let newMovieDetails = req.body;
        newMovieDetails._id = new mongoose.Types.ObjectId();
        Movie.create(newMovieDetails, function (err, movie) {
            if (err) return res.status(400).json(err);
            res.json(movie);
        });
    },
    getOne: function (req, res) {
        Movie.findOne({ _id: req.params.id })
            .populate('actors')
            .exec(function (err, movie) {
                if (err) return res.status(400).json(err);
                if (!movie) return res.status(404).json();
                res.json(movie);
            });
    },
    updateOne: function (req, res) {
        Movie.findOneAndUpdate({ _id: req.params.id }, req.body, function (err, movie) {
            if (err) return res.status(400).json(err);
            if (!movie) return res.status(404).json();
            res.json(movie);
        });
    },

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // MY CODE
    //delete one movie for the ID entered by the user
    deleteOne: function (req, res) {
        Movie.findOneAndRemove({ _id: req.params.id }, function (err) {
            if (err) return res.status(400).json(err);
            res.json();
        });
    },
    
    //add existing actor to actors in a movie
    addActor: function (req, res) {
        Movie.findOne({ _id: req.params.id }, function (err, movies) {
            if (err) return res.status(400).json(err);
            if (!movies) return res.status(404).json();
            //get actor id from body request
            Actor.findOne({ _id: req.body.id }, function (err, actor) {
                if (err) return res.status(400).json(err);
                if (!actor) return res.status(404).json();
                movies.actors.push(actor._id); //actors --> refers to the document?, not the actor object being parsed
                movies.save(function (err) {
                    if (err) return res.status(500).json(err);
                    res.json(movies);
                });
            })
        });
    },
    removeActors: function(req, res){
        //console.log(req.params);
        Movie.update({_id: req.params.idM}, {$pull: {actors: req.params.idA}}, function(err, movie){
            if (err) return res.status(400).json(err);
            if(!movie) return res.status(404).json();
            res.json();
        })
    },
    moviesBetweenPeriods: function(req, res){
        //assuming year1<year2
        Movie.where('year').gte(req.params.year1).lte(req.params.year2).exec(function(err, movies){
            if (err) return res.status(404).json(err);
            res.json(movies);
        })
    },
    deleteBetweenPeriods: function(req, res){
        //assuming year1<year2
        console.log(req.body);
        Movie.deleteMany({'year': {$gte: req.body.year1} && {$lte: req.body.year2}}, function (err) {
            if (err) return res.status(404).json(err);
            res.json();
        })
    }


};