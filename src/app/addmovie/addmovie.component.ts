import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

  moviesDB: any[] = [];
  actorsDB: any[] = [];
  section = 1;
  title: string = "";
  year: number = 0;

  movieId = "";
  actorId = "";
  movieTitle = "";
  actorName= "";
  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit(): void {
    
  }
 

  onSaveMovies(){
    let obj = {title: this.title, year: this.year};
    // send to back-end server
    this.dbService.addMovies(obj).subscribe(data => {
      this.router.navigate(["/listmovies"]);
    })

  }

}
