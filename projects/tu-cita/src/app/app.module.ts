import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapViewModule } from './map-view/map-view.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReservationModule } from './components/reservation/reservation.module';
import { ReservationDetailsModule } from './components/reservation-details/reservation-details.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapViewModule,
    BrowserAnimationsModule,
    ReservationModule,
    ReservationDetailsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
