import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './app/navbar/navbar.component';
import { FooterComponent } from './app/footer/footer.component';
import { HomeComponent } from './app/home/home.component';
import { FormComponent } from './app/form/form.component';
import { AboutComponent } from './app/about/about.component';
import { SantaAnaComponent } from './app/Departamentos/santa-ana.component';
import { ChalatenangoComponent } from './app/Departamentos/chalatenango.component';
import { SanSalvadorComponent } from './app/Departamentos/san-salvador.component';
import { SonsonateComponent } from './app/Departamentos/sonsonate.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
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
  { path: 'chalate', component: ChalatenangoComponent },
  { path: 'salvador', component: SanSalvadorComponent},
  { path: 'sonsonate', component: SonsonateComponent}
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync()
  ]
});