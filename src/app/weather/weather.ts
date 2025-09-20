import { HttpClient } from '@angular/common/http';
import { Component, ChangeDetectorRef } from '@angular/core';
import { WeatherData } from '../weather-data';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-weather',
  imports: [ CommonModule ],
  templateUrl: './weather.html',
  styleUrl: './weather.scss'
})
export class Weather {
    forecasts: WeatherData[] = [];

  constructor(http: HttpClient, private cdr: ChangeDetectorRef) {
  http.get<WeatherData[]>("http://localhost:5048/WeatherForecast").subscribe(result => {
    console.log(result);
        this.forecasts = result; this.cdr.detectChanges();  

  }); 
} 
}

//cdr manually controls change detection since zoneless