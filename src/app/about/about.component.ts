import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
  <div id="root" class="container mx-auto p-4">
  <h1 class="text-2xl font-bold mb-6 text-center">Creadores</h1>
  <div id="sections-container" class="max-w-4xl mx-auto"></div>
</div>
  `
})
export class AboutComponent {}