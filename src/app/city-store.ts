import { Injectable } from '@angular/core';

interface City {
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

  constructor() { }

  add(city: City) {
    this.cities = [
      ...this.cities, city
    ];
  }
}
