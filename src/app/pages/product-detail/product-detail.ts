import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router'; //Para leer la URL
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { RouterLink } from '@angular/router';
import { PRODUCTS } from '../../data/products.data'; //Importamos tus datos

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, ButtonModule, TagModule, RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnInit {

  product: any = null;
  selectedImage: string = ''; //Para la galería

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    //Capturar el ID de la URL
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      //Buscar el producto
      this.product = PRODUCTS.find(p => p.id === id);

      //Si existe, ponemos la primera imagen como principal
      if (this.product) {
        this.selectedImage = this.product.images[0];
        window.scrollTo(0, 0); //Subir el scroll al inicio
      } else {
        //Si no existe, volver al catálogo
        this.router.navigate(['/catalogo']);
      }
    });
  }

  //Función para WhatsApp
  buyOnWhatsApp() {
    if (!this.product) return;
    const phoneNumber = '51950051321';
    const message = `Hola SAMA BIKERS, estoy viendo el producto *${this.product.name}* en su web y quisiera comprarlo.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
