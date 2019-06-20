import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-list',
  template: `
    <div>
      <app-city></app-city>
      <app-city></app-city>
      <app-city></app-city>
    </div>
  `,
  styles: []
})
export class CityListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
