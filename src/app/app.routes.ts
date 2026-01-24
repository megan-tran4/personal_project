import { Routes } from '@angular/router';
import { Ventra } from '../ventra/ventra';
import { Home } from '../home/home';

export const routes: Routes = [ 
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: Home},
    {path:'Ventra', component: Ventra}
];
