import { Component, OnInit } from '@angular/core';
import { CityStore } from 'src/app/lib/city-store.service';
import { Observable } from 'rxjs';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-city-list',
  template: `
    <div *ngFor="let city of cities$ | async">
      <app-city [city]="city"></app-city>
    </div>
  `
})
export class CityListComponent implements OnInit {
  cities$: Observable<City[]>;

  constructor(private cityStore: CityStore) { }

  ngOnInit() {
    this.cities$ = this.cityStore.cities$;
  }
}
