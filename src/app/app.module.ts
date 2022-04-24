import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './header&footer/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
