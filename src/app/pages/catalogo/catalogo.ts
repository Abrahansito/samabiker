import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; //Para el buscador
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox'; //Para filtros
import { InputTextModule } from 'primeng/inputtext'; //Para barra de búsqueda
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, CheckboxModule, InputTextModule, TagModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class Catalogo{

  //Variable para guardar lo que escribe el usuario
  searchTerm: string = '';
  //Variable para controlar la vista en móvil
  mobileFiltersVisible: boolean = false;

  //Categorías para el filtro lateral
  categories = [
    { name: 'Protección', key: 'proteccion', selected: false },
    { name: 'Indumentaria', key: 'indumentaria', selected: false },
    { name: 'Mantenimiento', key: 'mantenimiento', selected: false },
    { name: 'Repuestos', key: 'repuestos', selected: false },
    { name: 'Accesorios', key: 'accesorios', selected: false },
    { name: 'Portacelular', key: 'portacelular', selected: false }
  ];

  //Lista completa de productos (simulada)
  products = [
    {
      name: 'Portacelular para moto',
      category: 'Portacelular',
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
      category: 'Mantenimiento',
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

  //Función para abrir/cerrar
  toggleMobileFilters() {
    this.mobileFiltersVisible = !this.mobileFiltersVisible;
  }

  //Esta función filtra la lista automáticamente
  get visibleProducts() {
    return this.products.filter(product => {

      //Filtro de Texto (Buscador)
      const matchesSearch = product.name.toLowerCase().includes(this.searchTerm.toLowerCase());

      //Filtro de Categoría
      //Vemos cuáles casillas están marcadas
      const selectedCategories = this.categories
                                     .filter(c => c.selected)
                                     .map(c => c.name);

      //Si no hay nada marcado, mostramos todo. Si hay marcados, debe coincidir.
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);

      return matchesSearch && matchesCategory;
    });
  }

  //Función para limpiar el buscador y desmarcar todas las categorías
resetFilters() {
  this.searchTerm = '';
  this.categories.forEach(c => c.selected = false);
}

  // Función para abrir WhatsApp (La misma del Home)
  openWhatsApp(product: any) {
    const phoneNumber = '51950051321';
    const message = `Hola SAMA BIKERS, me interesa el producto del catálogo: *${product.name}*.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }



}
