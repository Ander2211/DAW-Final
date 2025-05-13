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
import { AhuachapanComponent } from './app/Departamentos/ahuachapan.component';
import { CabanasComponent } from './app/Departamentos/cabanas.component';
import { CuscatlanComponent } from './app/Departamentos/cuscatlan.component';
import { LaLibertadComponent } from './app/Departamentos/la-libertad.component';
import { LaPazComponent } from './app/Departamentos/la-paz.component';
import { LaUnionComponent } from './app/Departamentos/la-union.component';
import { MorazanComponent } from './app/Departamentos/morazan.component';
import { SanMiguelComponent } from './app/Departamentos/san-miguel.component';
import { SanVicenteComponent } from './app/Departamentos/san-vicente.component';
import { UsulutanComponent } from './app/Departamentos/usulutan.component';
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
  { path: 'sonsonate', component: SonsonateComponent},
  { path: 'ahuachapan', component: AhuachapanComponent },
  { path: 'cabanas', component: CabanasComponent },
  { path: 'cuscatlan', component: CuscatlanComponent },
  { path: 'la-libertad', component: LaLibertadComponent },
  { path: 'la-paz', component: LaPazComponent },
  { path: 'la-union', component: LaUnionComponent },
  { path: 'morazan', component: MorazanComponent },
  { path: 'san-miguel', component: SanMiguelComponent },
  { path: 'san-vicente', component: SanVicenteComponent },
  { path: 'usulutan', component: UsulutanComponent }
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync()
  ]
});