import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-3xl font-bold mb-6 text-center">Bienvenidos</h2>
      <p class="text-lg text-gray-700 mb-8 text-center">Esta es la página de inicio de nuestra aplicación.</p>
      
      <!-- Imagen 1: Con Tailwind para responsividad -->
      <div class="mb-8">
        <h3 class="text-xl mb-2">SVG del El Salvador</h3>
        <img 
          src="assets/sd.svg" 
          alt="SVG from assets" 
          class="w-full max-w-md mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
      </div>

      
    </div>
  `
})
export class HomeComponent {}