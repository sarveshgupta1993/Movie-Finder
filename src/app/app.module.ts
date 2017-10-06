import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {MoviesComponent} from 'app/components/movies/movies.components';
import {MovieComponent} from 'app/components/movie/movie.component';
import {MovieService} from  'app/services/movies.service';


const appRoutes:Routes=[
{path:'',component:MoviesComponent},
{path:'movie/:id',component:MovieComponent}


];


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
   
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
