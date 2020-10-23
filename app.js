//Name: Akshat Puri
//StudentID: 29684803
//Lab: 07

//given code from lab reading
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const actors = require('./routers/actor');
const movies = require('./routers/movie');
const app = express();
app.listen(8080);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const path = require('path');

app.use("/", express.static(path.join(__dirname, "dist/week10")));

// //process = array[node, app, local host, 90900, password]
// const DB_URL = "mongodb://" + process.argv[2] +" :27017/movies";
const DB_URL = "mongodb://localhost:27017/movies"

mongoose.connect(DB_URL, function (err) {
    if (err) {
        return console.log('Mongoose - connection error:', err);
    }
    console.log('Connect Successfully');
});
//Configuring Endpoints
//Actor RESTFul endpoionts 
app.get('/actors', actors.getAll);
app.post('/actors', actors.createOne);
app.get('/actors/:id', actors.getOne);
app.put('/actors/:id', actors.updateOne);
app.post('/actors/:id/movies', actors.addMovie);
app.delete('/actors/:id', actors.deleteOne);

//MY CODE
app.delete('/actor/all/:id', actors.deleteActorAndALLMovies); // not working
app.delete('/actors/:idA/:idM', actors.removeMovies);


//Movie RESTFul  endpoints
app.get('/movies', movies.getAll);
app.post('/movies', movies.createOne);
app.get('/movies/:id', movies.getOne);
app.put('/movies/:id', movies.updateOne);


//MY CODE
app.delete('/movies/:id', movies.deleteOne);
app.post('/movies/:id/actors', movies.addActor);
app.delete('/movies/:idM/:idA', movies.removeActors);
app.get('/movies/:year1/:year2', movies.moviesBetweenPeriods);
app.delete('/movies', movies.deleteBetweenPeriods);

