import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    
    template: `
  <nav id="barraNav">
  <input type="checkbox" id="btnMenu" name="btnMenu">
  <label for="btnMenu" id="lblMenu">
      <i class="fa-solid fa-bars"></i>
      <i class="fa-solid fa-xmark"></i>
  </label>
  <h1 id="titulo">El Salvador</h1>
  <ul class="menu" id="barraMenu">
      <li class="itemMenu" id="btnInicio">
          <a href="/inicio">Inicio</a>
      </li>
      <li class="itemMenu">
          <a href="#">Zona Occidental</a>
          <ul class="segundo-nivel">
              <li class="subElemento"><a href="departamentos/ahuachapan.html">Ahuachapán</a></li>
              <li class="subElemento"><a href="/santa-ana">Santa Ana</a></li>
              <li class="subElemento"><a href="/sonsonate">Sonsonate</a></li>
          </ul>
      </li>
      <li class="itemMenu">
          <a href="#">Zona Central</a>
          <ul class="segundo-nivel">
              <li class="subElemento"><a href="/chalate">Chalatenango</a></li>
              <li class="subElemento"><a href="departamentos/cuscatlan.html">Cuscatlán</a></li>
              <li class="subElemento"><a href="departamentos/cabañas.html">Cabañas</a></li>
              <li class="subElemento"><a href="departamentos/la-libertad.html">La Libertad</a></li>
              <li class="subElemento"><a href="departamentos/la-paz.html">La Paz</a></li>
              <li class="subElemento"><a href="departamentos/san-vicente.html">San Vicente</a></li>
              <li class="subElemento"><a href="/salvador">San Salvador</a></li>
          </ul>
      </li>
      <li class="itemMenu">
          <a href="#">Zona Oriental</a>
          <ul class="segundo-nivel">
              <li class="subElemento"><a href="">Morazán</a></li>
              <li class="subElemento"><a href="departamentos/la-union.html">La Unión</a></li>
              <li class="subElemento"><a href="departamentos/san-miguel.html">San Miguel</a></li>
              <li class="subElemento"><a href="departamentos/usulutan.html">Usulután</a></li>
          </ul>
      </li>
      <li class="itemMenu"><a href="/formulario">Contáctanos</a></li>
      <li class="itemMenu"><a href="/nosotros">Creadores</a></li>
  </ul>
</nav>
  `
})
export class NavbarComponent { }