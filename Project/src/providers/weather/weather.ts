import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apiKey='0564a857a382c23f4d0a07dca6cd922a';
  //'69abe6d268a528a8679bd28770d2e774';
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url='http://api.weatherstack.com/current?access_key='+this.apiKey+'&query=';
    //'https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/weather?q=';
  }
  getweather(city,state){

   return this.http.get(this.url+city)
   .map((res: Response) => res );

  }

}
