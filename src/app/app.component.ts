import { Component, OnInit } from '@angular/core';
import { NbSearchService } from '@nebular/theme';
import { CityStore } from './lib/city-store.service';
import { WeatherService } from './lib/weather.service';
import { normalize } from '../app/utils/helpers';
import { City } from './models/city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  city: City;
  loading: boolean;
  message = 'No Data';

  constructor(
    private searchService: NbSearchService,
    private cityStore: CityStore,
    private weatherService: WeatherService
  ) {
    this.searchService.onSearchSubmit()
      .subscribe(({ term }) => {
        this.getWeather(normalize(term));
      });

    this.cityStore.search
      .subscribe((city: City) => {
        if (city) {
          this.getWeather(city.name);
        }
      });
  }

  ngOnInit() { }

  getWeather(city: string): void {
    this.loading = true;
    this.weatherService.getWeather(city)
      .subscribe(res => {
        const { name, main, weather } = res as any;
        this.city = {
          name,
          temp: main.temp,
          main: weather[0].main,
          icon: 'http://openweathermap.org/img/w/' + weather[0].icon + '.png'
        };
        this.cityStore.add(this.city);
        this.loading = false;
      }, (error) => {
        if (error.status === 404) {
          // alert(error.statusText);
          this.city = null;
          this.message = error.statusText;
          this.loading = false;
        }
      });
  }
}
