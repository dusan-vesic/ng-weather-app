import { Component, OnInit, Input } from '@angular/core';
import { CityStore, City } from 'src/app/city-store';

@Component({
  selector: 'app-city',
  template: `
    <nb-card>
      <nb-card-body>
        <div (click)="onSelect(city)" class="city-wrapper">
          <span>{{city.name}}</span>
          <span>1</span>
          <span>1</span>
        </div>
      </nb-card-body>
    </nb-card>
  `,
  styles: [`
    .city-wrapper {
      display: flex;
      justify-content: space-between;
    }
  `]
})
export class CityComponent implements OnInit {

  @Input() city: City;

  constructor(
    private cityStore: CityStore
  ) { }

  ngOnInit() {

  }

  onSelect(city: City) {
    this.cityStore.updatedDataSelection(city);
  }

}
