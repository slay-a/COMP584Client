import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { WeatherData } from '../weather-data';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AsyncPipe} from '@angular/common';
@Component({
  selector: 'app-weather',
  imports: [AsyncPipe],
  templateUrl: './weather.html',
  styleUrl: './weather.scss'
})

export class Weather {
  forecasts$: Observable<WeatherData[]>;

  constructor(private http: HttpClient) {
    this.forecasts$ = http.get<WeatherData[]>('http://localhost:5145/WeatherForecast')
      
  }
}