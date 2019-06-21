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
          <nb-icon
            status="danger"
            (click)="onDelete($event, city)"
            icon="trash">
          </nb-icon>
        </div>
      </nb-card-body>
    </nb-card>
  `,
  styles: [`
    nb-card-body:hover {
      cursor: pointer
    }
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

  onSelect(city: City): void {
    this.cityStore.updatedDataSelection(city);
  }

  onDelete(event: MouseEvent, city: City): void {
    event.stopPropagation();
    this.cityStore.remove(city);
  }
}
