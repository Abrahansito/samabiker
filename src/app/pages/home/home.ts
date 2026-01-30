import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, RouterModule,  CommonModule, TagModule ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // DATOS ACTUALIZADOS: Imágenes PNG transparentes de alta calidad
  products = [
    {
      name: 'Casco AGV Pista GP RR', // Nombre más pro
      category: 'Protección',
      // Imagen transparente (sin fondo blanco)
      image: 'imagen/casco.jpg',
      price: 4500.00,
      badge: 'PREMIUM'
    },
    {
      name: 'Guantes Alpinestars SP-8 v3',
      category: 'Indumentaria',
      image: 'imagen/casco.jpg',
      price: 420.00,
      badge: 'NUEVO'
    },
    {
      name: 'Motul 7100 10W40 4T',
      category: 'Mantenimiento',
      // La botella ahora se ve limpia, sin el recuadro blanco
      image: 'imagen/casco.jpg',
      price: 280.00,
      badge: 'OFERTA'
    },
    {
      name: 'Escape Akrapovic Slip-On',
      category: 'Repuestos',
      image: 'imagen/casco.jpg',
      price: 3200.00,
      badge: ''
    }
  ];
}
