import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

interface Departamento {
  nombre: string;
  url: string;
}

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterLink],
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
                    <a [routerLink]="['/']">Inicio</a>
                </li>
                <li class="itemMenu">
                    <a href="javascript:void(0)">Zona Occidental</a>                    <ul class="segundo-nivel">
                        <li class="subElemento"><a [routerLink]="['/ahuachapan']">Ahuachapán</a></li>
                        <li class="subElemento"><a [routerLink]="['/santa-ana']">Santa Ana</a></li>
                        <li class="subElemento"><a [routerLink]="['/sonsonate']">Sonsonate</a></li>
                    </ul>
                </li>
                <li class="itemMenu">
                    <a href="javascript:void(0)">Zona Central</a>                    <ul class="segundo-nivel">
                        <li class="subElemento"><a [routerLink]="['/chalate']">Chalatenango</a></li>
                        <li class="subElemento"><a [routerLink]="['/cuscatlan']">Cuscatlán</a></li>
                        <li class="subElemento"><a [routerLink]="['/cabanas']">Cabañas</a></li>
                        <li class="subElemento"><a [routerLink]="['/la-libertad']">La Libertad</a></li>
                        <li class="subElemento"><a [routerLink]="['/la-paz']">La Paz</a></li>
                        <li class="subElemento"><a [routerLink]="['/san-vicente']">San Vicente</a></li>
                        <li class="subElemento"><a [routerLink]="['/salvador']">San Salvador</a></li>
                    </ul>
                </li>
                <li class="itemMenu">
                    <a href="javascript:void(0)">Zona Oriental</a>                    <ul class="segundo-nivel">
                        <li class="subElemento"><a [routerLink]="['/morazan']">Morazán</a></li>
                        <li class="subElemento"><a [routerLink]="['/la-union']">La Unión</a></li>
                        <li class="subElemento"><a [routerLink]="['/san-miguel']">San Miguel</a></li>
                        <li class="subElemento"><a [routerLink]="['/usulutan']">Usulután</a></li>
                    </ul>
                </li>
                <li class="itemMenu"><a [routerLink]="['/formulario']">Contáctanos</a></li>
                <li class="itemMenu"><a [routerLink]="['/nosotros']">Creadores</a></li>
            </ul>
            <div id="contenedorBuscador">
                <input type="text" id="buscador" placeholder="Buscar departamento..." autocomplete="off">
                <ul id="sugerencias"></ul>
            </div>
        </nav>
    `
})
export class NavbarComponent implements OnInit {  departamentos: Departamento[] = [
    { nombre: 'Ahuachapán', url: '/ahuachapan' },
    { nombre: 'Santa Ana', url: '/santa-ana' },
    { nombre: 'Sonsonate', url: '/sonsonate' },
    { nombre: 'Chalatenango', url: '/chalate' },
    { nombre: 'Cuscatlán', url: '/cuscatlan' },
    { nombre: 'Cabañas', url: '/cabanas' },
    { nombre: 'La Libertad', url: '/la-libertad' },
    { nombre: 'La Paz', url: '/la-paz' },
    { nombre: 'San Vicente', url: '/san-vicente' },
    { nombre: 'San Salvador', url: '/salvador' },
    { nombre: 'Morazán', url: '/morazan' },
    { nombre: 'La Unión', url: '/la-union' },
    { nombre: 'San Miguel', url: '/san-miguel' },
    { nombre: 'Usulután', url: '/usulutan' }
  ];

  sugerencias: Departamento[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const buscador = document.getElementById('buscador') as HTMLInputElement;
    const sugerenciasList = document.getElementById('sugerencias');

    if (buscador && sugerenciasList) {
      buscador.addEventListener('input', () => {
        const busqueda = buscador.value.toLowerCase();
        this.sugerencias = busqueda ? 
          this.departamentos.filter(dep => 
            dep.nombre.toLowerCase().includes(busqueda)
          ) : [];

        // Limpiar y mostrar sugerencias
        sugerenciasList.innerHTML = '';
        this.sugerencias.forEach(dep => {
          const li = document.createElement('li');
          li.textContent = dep.nombre;
          li.addEventListener('click', () => {
            this.router.navigate([dep.url]);
            buscador.value = '';
            sugerenciasList.innerHTML = '';
          });
          sugerenciasList.appendChild(li);
        });
      });

      // Cerrar sugerencias al hacer clic fuera
      document.addEventListener('click', (e) => {
        if (!buscador.contains(e.target as Node) && !sugerenciasList.contains(e.target as Node)) {
          sugerenciasList.innerHTML = '';
          buscador.value = '';
        }
      });
    }
  }
}