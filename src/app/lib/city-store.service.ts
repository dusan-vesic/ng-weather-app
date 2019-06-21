import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { City } from '../models/city';
import { WeatherService } from './weather.service';
import { RefreshService } from './refresh.service';

const mock: City[] = [{
  name: 'Boston'
}, {
  name: 'New York'
}, {
  name: 'Portland'
}];

@Injectable({
  providedIn: 'root'
})
export class CityStore {

  cities: City[];
  cities$ = new BehaviorSubject<City[]>([]);

  private searchSource = new BehaviorSubject<City>(null);
  search = this.searchSource.asObservable();

  constructor(
    private localStorage: LocalStorageService,
    private weatherService: WeatherService,
    private refresh: RefreshService
  ) {
    if (this.localStorage.get('cities')) {
      this.cities = this.localStorage.get('cities');
      this.cities$.next(this.cities);
    } else {
      this.cities = mock;
      this.localStorage.set('cities', this.cities);
      this.cities$.next(this.cities);
    }

    this.setupWeatherData();

    // refresh sidebar weather
    // this.refresh.setup(
    //   3, this.setupWeatherData.bind(this)
    // )
  }

  add(city: City): boolean | void {
    const dup = this.cities.find(e => Object.is(e.name, city.name));
    if (dup) { return false; }

    this.cities = [
      ...this.cities, city
    ];

    this.updatedDataSelection(city);
    this.cities$.next(this.cities);
    this.localStorage.set('cities', this.cities);
  }

  remove(city: City): void {
    this.cities = this.cities.filter(
      elm => elm.name !== city.name
    );
    this.cities$.next(this.cities);
    this.localStorage.set('cities', this.cities);
  }

  updatedDataSelection(data: City): void {
    this.searchSource.next(data);
  }

  setupWeatherData() {
    forkJoin(
      this.cities.map(city => this.weatherService.getWeather(city.name))
    ).subscribe(res => {
      this.cities = res.map((city: any) => {
        return {
          name: city.name,
          temp: city.main.temp,
          main: city.weather[0].main,
          icon: 'http://openweathermap.org/img/w/' + city.weather[0].icon + '.png'
        };
      });
      this.localStorage.set('cities', this.cities);
      this.cities$.next(this.cities);
    });
  }
}
