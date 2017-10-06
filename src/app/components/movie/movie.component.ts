import { Component ,OnInit } from '@angular/core';
import {MovieService} from 'app/services/movies.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'movie',
  templateUrl: 'movie.component.html',
  
})
export class MovieComponent implements OnInit {
 
 constructor(private router:ActivatedRoute,private _movieservice:MovieService)
 {


 }

 ngOnInit()
 {

this.router.params.subscribe((params)=>{
let id=params['id'];
    this._movieservice.getMovie(id).subscribe(movie=>{
        console.log(movie)
    })
})
    
     }
 }





