import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

export interface City {
  name: string;
}

const mock: City[] = [{
  name: 'Boston'
}, {
  name: 'Washington'
}, {
  name: 'Portland'
}];

@Injectable({
  providedIn: 'root'
})
export class CityStore {

  cities: City[];
  cities$ = new BehaviorSubject<City[]>([]);

  private dataSource = new BehaviorSubject<City>(null);
  data = this.dataSource.asObservable();

  constructor(
    private localStorage: LocalStorageService
  ) {
    if (this.localStorage.get('cities')) {
      this.cities = this.localStorage.get('cities');
      this.cities$.next(this.cities);
    } else {
      this.cities = mock;
      this.localStorage.set('cities', this.cities);
      this.cities$.next(this.cities);
    }
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
    this.dataSource.next(data);
  }
}
