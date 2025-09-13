import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { WeatherData } from '../weather-data';

@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.html',
  styleUrl: './weather.scss'
})
export class Weather {
  constructor(http: HttpClient) {
  http.get<WeatherData[]>("http://localhost:5048/WeatherForecast").subscribe(result => {
    // handle result here
    console.log(result);
  }); 
}
}
