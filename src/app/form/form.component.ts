import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form id="contactForm">
      <label for="name">Nombre:</label>
      <input type="text" id="name" name="name" required />
      <br />
      <label for="email">Correo Electrónico:</label>
      <input type="email" id="email" name="email" required />
      <br />
      <label for="country">País:</label>
      <input type="text" id="country" name="country" required />
      <br />
      <label for="message">Mensaje:</label>
      <textarea id="message" name="message" required></textarea>
      <br />
      <button type="submit" class="hover:text-white w-50 p-2">Enviar</button>
    </form>
  `,
})
export class FormComponent {
  formData = {
    nombre: '',
    email: '',
  };

  onSubmit() {
    console.log('Formulario enviado:', this.formData);
  }
}
