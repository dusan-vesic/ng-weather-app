import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { CityListComponent } from './city-list/city-list.component';
import { CityComponent } from './city/city.component';
import { NbCardModule } from '@nebular/theme';

@NgModule({
  declarations: [SidebarComponent, CityListComponent, CityComponent],
  imports: [
    CommonModule,
    NbCardModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
