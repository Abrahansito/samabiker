import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea'; // Para el mensaje largo

@Component({
  selector: 'app-contacto',
  imports: [CommonModule, ButtonModule, InputTextModule, TextareaModule ],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto{

  //Función para enviar a WhatsApp (Simula un envío de formulario)
  sendMessage(name: string, message: string) {
    const phoneNumber = '51950051321'; // Tu número
    const fullMessage = `Hola, soy ${name}. ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
    window.open(url, '_blank');
  }

}
