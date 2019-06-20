import { Component } from '@angular/core';
import { NbSearchService } from '@nebular/theme';
import { CityStore } from './city-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value = '';

  constructor(
    private searchService: NbSearchService,
    private cityStore: CityStore
  ) {
    this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        this.value = data.term;
        console.log(this.value);
      });

    // test store
    console.log(this.cityStore.cities);
  }
}
