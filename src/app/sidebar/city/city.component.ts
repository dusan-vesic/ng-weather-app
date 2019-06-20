import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  template: `
    <nb-card>
      <nb-card-body>
        <div class="city-wrapper">
          <span>city name</span>
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

  constructor() { }

  ngOnInit() {
  }

}
