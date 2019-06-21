import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface City {
  name: string;
}

let cities: City[] = [{
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

  private dataSource = new BehaviorSubject<City>({ name: null });
  data = this.dataSource.asObservable();

  constructor() { }

  add(city: City): Observable<City[]> {
    cities = [
      ...cities, city
    ];

    return of(cities);
  }

  getAll(): Observable<City[]> {
    return of(cities);
  }

  updatedDataSelection(data: City) {
    this.dataSource.next(data);
  }
}
