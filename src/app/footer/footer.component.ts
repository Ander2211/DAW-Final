import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="container-fluid text-white text-center py-3 mt-[15rem]">
      <div class="row">
        <div class="col-12">
          <p>© 2025 - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {} 