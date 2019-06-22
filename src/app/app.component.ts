import { Component } from '@angular/core';
import { NbSearchService } from '@nebular/theme';
import { CityStore } from './lib/city-store.service';
import { WeatherService } from './lib/weather.service';
import { normalize } from '../app/utils/helpers';
import { City } from './models/city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .align {
      display: flex;
      flex-direction: row;
      justify-content: space-around; align-items: center
    }
  `]
})
export class AppComponent {
  city: City;
  loading: boolean;
  message = 'No Data';

  constructor(private searchService: NbSearchService,
              private cityStore: CityStore,
              private weatherService: WeatherService) {
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

  getWeather(city: string): void {
    this.loading = true;
    this.weatherService.getWeather(city)
      .subscribe(data => {
        const { name, main, weather } = data as any;
        this.city = {
          name,
          main,
          weather: weather[0]
        };
        this.cityStore.add(this.city);
        this.loading = false;
      }, (error) => {
        if (error.status === 404) {
          alert(`City ${error.statusText}`);
          this.city = null;
          this.message = error.statusText;
        }
        this.loading = false;
      });
  }
}
