import { Component, OnInit, Input } from '@angular/core';
import { CityStore } from 'src/app/lib/city-store.service';
import { City } from 'src/app/models/city';
import { buildIconUrl } from '../../utils/helpers';

@Component({
  selector: 'app-city',
  template: `
    <nb-card>
      <nb-card-body>
        <div (click)="onSelect(city)">
          <div class="wrapper">
            <span>{{city.name}}</span>
            <span>
              {{ city.main.temp | number:'1.0-0'}}
              <span style="font-size: 10px;">&#8451;</span>
            </span>
            <nb-icon
              status="danger"
              (click)="onDelete($event, city)"
              icon="trash"
              style="font-size: 15px">
            </nb-icon>
          </div>
          <div class="wrapper">
            <img [src]="icon" width="30" />
            <span>{{ city.main.temp }}</span>
          </div>
        </div>
      </nb-card-body>
    </nb-card>
  `,
  styles: [`
    nb-card-body:hover {
      cursor: pointer
    }
    .wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `]
})
export class CityComponent implements OnInit {
  @Input() city: City;

  icon = ''; /* todo: pipe this */

  constructor(private cityStore: CityStore) { }

  ngOnInit() {
    this.icon = buildIconUrl(this.city.weather.icon);
  }

  onSelect(city: City): void {
    this.cityStore.updatedDataSelection(city);
  }

  onDelete(event: MouseEvent, city: City): void {
    event.stopPropagation();
    this.cityStore.remove(city);
  }
}
