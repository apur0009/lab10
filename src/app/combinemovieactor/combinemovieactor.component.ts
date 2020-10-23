import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-combinemovieactor',
  templateUrl: './combinemovieactor.component.html',
  styleUrls: ['./combinemovieactor.component.css']
})
export class CombinemovieactorComponent implements OnInit {

  moviesDB: any[] = [];
  actorsDB: any[] = [];
  section = 1;
  title: string = "";
  year: number = 0;

  movieId = "";
  actorId = "";
  movieTitle = "";
  actorName= "";

  constructor(private dbService: DatabaseService, private router: Router) {}
  //Get all Actors
  onGetMovies() {
    console.log("From on GetActors");
    return this.dbService.getmovie().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
  }

  onGetActors() {
    this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
  }

  holdMovieID(movieID, movieName){
    this.movieId = movieID;
    this.movieTitle = movieName;

  }

  holdActorID(ActorID, actorName){
    this.actorId = ActorID;
    this.actorName = actorName;

  }

  addMovieActor(){
    let movie = {id: this.movieId};
    let actor = {id: this.actorId};
    console.log(movie, actor);

    this.dbService.addMoviestoActor(this.actorId, movie).subscribe(data=> {

    this.dbService.addActorstoMovies(this.movieId, actor).subscribe(data=> {
      this.onGetActors();
      this.onGetMovies();

      this.router.navigate(["/listmovies"]);
    })
      
    })




  }





  // This callback function will be invoked with the component get initialized by Angular.
  ngOnInit() {
    this.onGetMovies();
    this.onGetActors();
  }


}
