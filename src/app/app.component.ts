import { Component } from '@angular/core';
import { NbSearchService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value = '';

  constructor(
    private searchService: NbSearchService
  ) {
    this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        this.value = data.term;
        console.log(this.value);
      });
  }
}
