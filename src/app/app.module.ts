import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSearchModule,
  NbCardModule,
  NbSidebarModule,
  NbSpinnerModule
} from '@nebular/theme';
import { SidebarModule } from './sidebar/sidebar.module';
import { BuildIconUrl } from './pipes/build-icon-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BuildIconUrl
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSearchModule,
    NbCardModule,
    NbSidebarModule.forRoot(),
    SidebarModule,
    NbSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
