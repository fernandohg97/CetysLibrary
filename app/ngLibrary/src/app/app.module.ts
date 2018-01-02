import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './home/home.module';
import Chart from 'chart.js';

@NgModule({
  // All components
  declarations: [
    AppComponent
  ],
  // All modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AdminModule
  ],
  providers: [], // Services are here
  bootstrap: [AppComponent]
})
export class AppModule { }
