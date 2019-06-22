import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildIconUrl } from '../pipes/build-icon-url.pipe';

@NgModule({
  declarations: [
    BuildIconUrl
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BuildIconUrl
  ]
})
export class SharedModule { }
