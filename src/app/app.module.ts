import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/Home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './haedar/navbar/navbar.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, FooterComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
