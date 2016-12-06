import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing,appRoutingProviders }  from './app.routing';

import { AppComponent } from '../components/AppComponent/app.component';
import { HeroDetailComponent } from '../components/HeroDetailComponent/hero-detail.component';
import { HeroComponent } from '../components/HeroComponent/hero.component';
import { DashboardComponent } from '../components/DashboardComponent/dashboard.component';
import { HeroService } from '../service/hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroComponent,
    DashboardComponent
  ],
  providers: [
    appRoutingProviders,
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
