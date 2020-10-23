import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddactorComponent } from './addactor/addactor.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { ListactorsComponent } from './listactors/listactors.component';
import { ListmoviesComponent } from './listmovies/listmovies.component';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseService } from './database.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeleteactorComponent } from './deleteactor/deleteactor.component';
import { UpdateactorTwoComponent } from './updateactor-two/updateactor-two.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { CombinemovieactorComponent } from './combinemovieactor/combinemovieactor.component';
import { ViewnotfoundComponent } from './viewnotfound/viewnotfound.component';

const week10Routes: Routes = [
  //eash array has two attriblties the path and the components 
  //routing engine for the front end, nothing todo with the back end 
  {path: 'addactor', component: AddactorComponent},
  {path: 'addmovie', component: AddmovieComponent},
  {path: 'listactors', component: ListactorsComponent},
  {path: 'listmovies', component: ListmoviesComponent},
  { path: "updateactor", component: UpdateactorTwoComponent },
  { path: "deleteactor", component: DeleteactorComponent },
  { path: "deletemovie", component: DeleteMovieComponent },
  { path: "combinemovieactor", component: CombinemovieactorComponent },
  { path: "", redirectTo: "/listactors", pathMatch: "full" },
  { path: '**', component: ViewnotfoundComponent },


]

@NgModule({
  declarations: [
    AppComponent,
    AddactorComponent,
    AddmovieComponent,
    ListactorsComponent,
    ListmoviesComponent,
    UpdateactorTwoComponent,
    DeleteactorComponent,
    DeleteMovieComponent,
    CombinemovieactorComponent,
    ViewnotfoundComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(week10Routes, {useHash:true}), HttpClientModule, FormsModule
  ],
  providers: [DatabaseService], //resstering the database service
  bootstrap: [AppComponent]
})
export class AppModule { }
