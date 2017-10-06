import {Injectable} from  '@angular/core';
import {Jsonp,JsonpModule} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class MovieService
{
apikey:string;
constructor(private _jsonp:Jsonp)
    {
this.apikey='f3ecfd0b7033bf2f8c08cd21b5a71aa9';
console.log('Movie Service Initialized');
    }

getPopular()
{

return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=f3ecfd0b7033bf2f8c08cd21b5a71aa9')
.map(res=>res.json());
}


getInTheatres()
{

return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2017-08-01&primary_release_date.lte=2017-09-30&sort_by=popularity.desc&api_key=f3ecfd0b7033bf2f8c08cd21b5a71aa9')
.map(res=>res.json());
}

searchPictures(searchStr:string)
{
return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.desc&api_key=f3ecfd0b7033bf2f8c08cd21b5a71aa9')
.map(res=>res.json());
}

getMovie(id:string)
{
  return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'?callback=JSONP_CALLBACK&api_key=f3ecfd0b7033bf2f8c08cd21b5a71aa9')
.map(res=>res.json());  
}

}