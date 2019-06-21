import { Component, OnInit } from '@angular/core';
import { CityStore, City } from 'src/app/city-store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-city-list',
  template: `
    <div *ngFor="let city of cities | async">
      <app-city [city]="city"></app-city>
    </div>
  `,
  styles: []
})
export class CityListComponent implements OnInit {

  cities: Observable<City[]>;

  constructor(
    private cityStore: CityStore
  ) {}

  ngOnInit() {
    this.cities = this.cityStore.getAll();
  }

}
