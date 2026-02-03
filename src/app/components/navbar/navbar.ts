import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; //Necesario para *ngClass, *ngIf
import { RouterModule } from '@angular/router'; //Necesario para routerLink

//Importaciones de PrimeNG
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { BadgeModule } from 'primeng/badge'; //Agregamos Badge para el carrito
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    DrawerModule,
    BadgeModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  sidebarVisible: boolean = false;
  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
