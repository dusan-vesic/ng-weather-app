import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

enum Units {
  STANDARD = 'standard',
  METRIC = 'metric',
  IMPERIAL = 'imperial'
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  base = 'http://api.openweathermap.org/data/2.5/weather?q=';
  key = environment.API_KEY;

  constructor(private http: HttpClient) { }

  getWeather(city: string, units: string = Units.METRIC) {
    const url = `${this.base}${city}&units=${units}&appid=${this.key}`;
    return this.http.get(url);
  }

}
