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
      name: 'Portacelular para moto', // Nombre más pro
      category: 'Portacelular',
      // Imagen transparente (sin fondo blanco)
      image: 'imagen/Portacelular para moto.jpg',
      price: 50.00,
      badge: 'NUEVO'
    },
    {
      name: 'Faro neblinero',
      category: 'Indumentaria',
      image: 'imagen/Faro neblinero.jpg',
      price: 35.00,
      badge: 'NUEVO'
    },
    {
      name: 'Candado para moto',
      category: 'Candado',
      // La botella ahora se ve limpia, sin el recuadro blanco
      image: 'imagen/Candado para moto.jpg',
      price: 20.00,
      badge: 'OFERTA'
    },
    {
      name: 'EXPLORADORA LED 3X3',
      category: 'Repuestos',
      image: 'imagen/EXPLORADORA LED 3X3.jpg',
      price: 130.00,
      badge: ''
    }
  ];

  openWhatsApp(product: any) {
    //Tu número de celular (Código 51 de Perú)
    const phoneNumber = '51950051321';

    //El mensaje personalizado
    const message = `Hola SAMA BIKERS, estoy interesado en el producto: *${product.name}* que vi en la web. Quiero que me brindes más info.`;

    //Crear la URL mágica de WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    //Abrir en una nueva pestaña
    window.open(url, '_blank');
  }
}
