import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router'; //Agregamos withInMemoryScrolling
import { provideAnimations } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';

import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),

    //Configuración del Router con Scroll Suave
    provideRouter(routes, withInMemoryScrolling({
        anchorScrolling: 'enabled',       //Permite navegar a #ids
        scrollPositionRestoration: 'enabled' //Vuelve arriba al cambiar de página
    })),

    provideClientHydration(withEventReplay()),

    //Activación de animaciones
    provideAnimations(),

    // Configuración del tema Aura (Modo oscuro por defecto)
    providePrimeNG({
        theme: {
            preset: Aura,
            options: {
                darkModeSelector: '.my-app-dark', // Selector manual o 'system'
                cssLayer: {
                    name: 'primeng',
                    order: 'primeng'
                }
            }
        }
    })
  ]
};
