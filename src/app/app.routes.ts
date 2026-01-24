import { Routes } from '@angular/router';
import { Ventra } from '../ventra/ventra';
import { Home } from '../home/home';
import { Spotify } from '../spotify/spotify';

export const routes: Routes = [ 
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: Home},
    {path:'Ventra', component: Ventra},
    {path: 'Spotify', component: Spotify}
];
