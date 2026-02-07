import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Catalogo } from './pages/catalogo/catalogo';
import { Contacto } from './pages/contacto/contacto';
import { ProductDetail } from './pages/product-detail/product-detail';

export const routes: Routes = [
    { path: '', component: Home }, // Página de inicio
    { path: 'catalogo', component: Catalogo},
    { path: 'contacto', component: Contacto},
    { path: 'producto/:id', component: ProductDetail},
    { path: '**', redirectTo: '' } // Si ponen una ruta rara, volver al inicio
];
