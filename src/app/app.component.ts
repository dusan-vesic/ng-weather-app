import { Component, OnInit } from '@angular/core';
import { NbSearchService } from '@nebular/theme';
import { CityStore, City } from './lib/city-store.service';
import { RefreshService } from './lib/refresh.service';
import { WeatherService } from './lib/weather.service';
import { normalize } from '../app/utils/helpers';

export interface Weather {
  name: string;
  temp: number;
  main: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  weather: Weather;
  loading: boolean;

  constructor(
    private searchService: NbSearchService,
    private cityStore: CityStore,
    private refresh: RefreshService,
    private weatherService: WeatherService
  ) {
    this.searchService.onSearchSubmit()
      .subscribe(({ term }) => {
        this.cityStore.add({
          name: normalize(term)
        });
      });

    // test store
    // console.log(this.cityStore.cities);
    // this.refresh.setup(1)
    this.cityStore.data
      .subscribe((city: City) => {
        if (city) {
          this.getWeather(city.name);
        }
      });
  }

  ngOnInit() {

  }

  getWeather(city: string): void {
    // todo: add icon url
    // http://openweathermap.org/img/w/10d.png
    this.loading = true;
    this.weatherService.getWeather(city)
    .subscribe(w => {
      const { name, main, weather } = w as any;
      this.weather = {
        name,
        temp: main.temp,
        main: weather[0].main
      };
      this.loading = false;
    });
  }
}
