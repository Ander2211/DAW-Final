import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-8 text-center">Creadores</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <!-- Bryan Peña -->
        <div class="bg-white rounded-lg shadow-lg p-6 flex items-center">
          <div class="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
            <img src="assets/integrantes/Bryan.jpg" alt="Bryan Peña" class="w-full h-full object-cover">
          </div>
          <div class="ml-4">
            <h2 class="text-xl font-bold">Bryan Peña</h2>
            <p class="text-gray-600">Investigador / Desarrollador</p>
          </div>
        </div>

        <!-- Guillermo Hernández -->
        <div class="bg-white rounded-lg shadow-lg p-6 flex items-center">
          <div class="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
            <img src="assets/integrantes/Guille.jpg" alt="Guillermo Hernández" class="w-full h-full object-cover">
          </div>
          <div class="ml-4">
            <h2 class="text-xl font-bold">Guillermo Hernández</h2>
            <p class="text-gray-600">Investigador / Desarrollador</p>
          </div>
        </div>

        <!-- Yassir Meléndez -->
        <div class="bg-white rounded-lg shadow-lg p-6 flex items-center">
          <div class="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
            <img src="assets/integrantes/Yassir.jpg" alt="Yassir Meléndez" class="w-full h-full object-cover">
          </div>
          <div class="ml-4">
            <h2 class="text-xl font-bold">Yassir Meléndez</h2>
            <p class="text-gray-600">Investigador / Desarrollador</p>
          </div>
        </div>

        <!-- Anderson Hernández -->
        <div class="bg-white rounded-lg shadow-lg p-6 flex items-center">
          <div class="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
            <img src="assets/integrantes/Anderson.jpg" alt="Anderson Hernández" class="w-full h-full object-cover">
          </div>
          <div class="ml-4">
            <h2 class="text-xl font-bold">Anderson Hernández</h2>
            <p class="text-gray-600">Investigador / Desarrollador</p>
          </div>
        </div>

        <!-- Daniel Flores -->
        <div class="bg-white rounded-lg shadow-lg p-6 flex items-center">
          <div class="w-32 h-32 rounded-full border-2 border-red-700 overflow-hidden flex-shrink-0">
            <img src="assets/integrantes/Daniel.jpg" alt="Daniel Flores" class="w-full h-full object-cover">
          </div>
          <div class="ml-4">
            <h2 class="text-xl font-bold">Daniel Flores</h2>
            <p class="text-gray-600">Investigador / Desarrollador</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}