import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
    { path: '', component: Home }, // Página de inicio
    { path: '**', redirectTo: '' } // Si ponen una ruta rara, volver al inicio
];
