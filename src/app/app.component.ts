import { Component } from '@angular/core';
import { NbSearchService } from '@nebular/theme';
import { CityStore, City } from './city-store';
import { RefreshService } from './refresh.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value = '';

  constructor(
    private searchService: NbSearchService,
    private cityStore: CityStore,
    private refresh: RefreshService
  ) {
    this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        this.value = data.term;
        console.log(this.value);
      });

    // test store
    // console.log(this.cityStore.cities);
    // this.refresh.setup(1)
    this.cityStore.data
      .subscribe((city: City) => {
        console.log('selected', city);
      })
  }
}
