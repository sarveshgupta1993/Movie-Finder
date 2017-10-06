import { Component } from '@angular/core';
import {MovieService} from 'app/services/movies.service';

@Component({
  selector: 'Movies',
  templateUrl: 'movies.components.html',
 
})
export class MoviesComponent {

popularList:Array<Object>;
theaterlist:Array<Object>;
searchStr:string;
searchRes:Array<Object>;
    constructor(private _movieservice:MovieService)
    {
           this._movieservice.getPopular().subscribe(res=>{

               this.popularList=res.results;
           });

            this._movieservice.getInTheatres().subscribe(res=>{

               this.theaterlist=res.results;
           });

    }
   searchMovies()
   {

 this._movieservice.searchPictures(this.searchStr).subscribe(res=>{
     this.searchRes=res.results;
     
 })

   }
  
}
