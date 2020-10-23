import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {

  moviesDB: any[] = [];
  constructor(private dbService: DatabaseService, private router: Router) {}
  //Get all Actors
  onGetMovies() {
    console.log("From on GetActors");
    return this.dbService.getmovie().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
  }

  //Delete Actor
  onDeleteMovie(item) {
    this.dbService.deleteMovies(item._id).subscribe(result => {
      this.onGetMovies();
      this.router.navigate(["/listmovies"]);
    });
  }
  // This callback function will be invoked with the component get initialized by Angular.
  ngOnInit() {
    this.onGetMovies();
  }

}
