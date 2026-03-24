import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WithAlcoholComponent } from './with-alcohol/with-alcohol.component';
import{ WithoutAlcoholComponent } from './without-alcohol/without-alcohol.component';
import {AboutComponent} from './about/about.component';



export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'with-alcohol', component: WithAlcoholComponent },
  { path: 'without-alcohol', component: WithoutAlcoholComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];
