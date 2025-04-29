import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './app/navbar/navbar.component';
import { HomeComponent } from './app/home/home.component';
import { FormComponent } from './app/form/form.component';
import { AboutComponent } from './app/about/about.component';
import { SantaAnaComponent } from './app/Departamentos/santa-ana.component';
import { ChalatenangoComponent } from './app/Departamentos/chalatenango.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,],
  template: `
    <app-navbar></app-navbar>
    
    <router-outlet></router-outlet>
  `
})
export class App {
  name = 'Angular';
}

const routes = [
  { path: '', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'formulario', component: FormComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'santa-ana', component: SantaAnaComponent },
  { path: 'chalate', component: ChalatenangoComponent }
];



bootstrapApplication(App, {
  providers: [
    provideRouter(routes), provideAnimationsAsync()
  ]
});