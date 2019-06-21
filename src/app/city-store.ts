import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface City {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CityStore {

  cities: City[] = [{
    name: 'Boston'
  }, {
    name: 'Washington'
  }, {
    name: 'Portland'
  }];
  cities$ = new BehaviorSubject<City[]>(this.cities);

  private dataSource = new BehaviorSubject<City>({ name: null });
  data = this.dataSource.asObservable();

  constructor() {

  }

  add(city: City): boolean | void {
    const dup = this.cities.find(e => Object.is(e.name, city.name));
    if (dup) { return false; }

    this.cities = [
      ...this.cities, city
    ];

    this.updatedDataSelection(city);
    this.cities$.next(this.cities);
  }

  remove(city: City): void {
    this.cities = this.cities.filter(
      elm => elm.name !== city.name
    );
    this.cities$.next(this.cities);
  }

  updatedDataSelection(data: City): void {
    this.dataSource.next(data);
  }
}
