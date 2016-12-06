import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../components/AppComponent/app.component';
import { HeroComponent } from '../components/HeroComponent/hero.component';
import { DashboardComponent } from '../components/DashboardComponent/dashboard.component';
import { HeroDetailComponent } from '../components/HeroDetailComponent/hero-detail.component';

const appRoutes: Routes = [
  	{ path: '', redirectTo: '/dashboard',pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'heroes', component: HeroComponent},
    { path: 'detail/:id', component: HeroDetailComponent}
    
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
