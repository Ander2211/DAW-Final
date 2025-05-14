import { Component } from '@angular/core';

@Component({
  selector: 'app-la-libertad',
  standalone: true,
  imports: [],
  template: `
  <main>
        <h2 id="nombreDept" class="pacific-cyan">La Libertad</h2>
        
        <article><!--Información general y municipios-->
            <img src="assets/departamentos/libertad.png" id="imgDept">
            <p>Conocido principalmente por sus playas de clase mundial, La Libertad es el sueño de cualquier surfista. 
                Pero este departamento no se limita al sol y el mar; también ofrece historia, naturaleza y cultura.</p>
            <h4>Municipios:</h4>
            <ol class="row">
                <div class="col-sm-3">
                    <li>Quezaltepeque</li>
                    <li>San Matías</li>
                    <li>San Pablo Tacachico</li>
                    <li>San Juan Opico</li>
                    <li>Ciudad Arce</li>
                    <li>Colón</li>
                    <li>Jayaque</li>
                </div>
                <div class="col-sm-3">
                    <li>Sacacoyo</li>
                    <li>Tepecoyo</li>
                    <li>Talnique</li>
                    <li>Antiguo Cuscatlán</li>
                    <li>Huizúcar</li>
                    <li>Nuevo Cuscatlán</li>
                    <li>San José Villanueva</li>
                </div>
                <div class="col-sm-3">
                    <li>Zaragoza</li>
                    <li>Chiltiupán</li>
                    <li>Jicalapa</li>
                    <li>abc</li>
                    <li>La Libertad</li>
                    <li>Tamique</li>
                    <li>Teotepeque</li>
                </div>
                <div class="col-sm-3">
                    <li>Comasagua</li>
                    <li>Santa Tecla</li>
                </div>
            </ol>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Centros turísticos</h3>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">El Boquerón Conchalío</h4>
                    <img src="assets/La Libertad/conchalio.png">
                </div>
                <p>Playa con olas suaves y entorno relajado, ideal para el turismo familiar.</p>
            </section>
            <br>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Muelle del Puerto de La Libertad</h4>
                    <img src="assets/La Libertad/muelle-turistico-puertolibertad-scaled.jpg">
                </div>
                <p>Muelle emblemático para pescadores y turistas, con restaurantes de mariscos.</p>
            </section>
            <br>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">San Blas</h4>
                    <img src="assets/La Libertad/san-blas-3.jpg">
                </div>
                <p>Playa conocida por sus arenas claras y ambiente tranquilo, ideal para el descanso.</p>
            </section>
            <br>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">El Tunco</h4>
                    <img src="assets/La Libertad/el-tunco.jpg">
                </div>
                <p>Playa turística popular por el surf y su vida nocturna.</p>
            </section>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Geografia</h3>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Ríos</h4>
                <div class="geografia">
                    <img src="assets/La Libertad/rioChilama.jpg" class="img-geo">
                    <p class="info-geo">
                        Río La Chilama
                        <br>
                        Río corto que desemboca en el Océano Pacífico, conocido por su biodiversidad.
                    </p>
                </div>
            </section>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Personajes Célebres</h3>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">José Matías Delgado</h4>
                <div class="personajes row">
                    <img src="assets/La Libertad/José_Matías_Delgado,.jpg" class="img-persona">
                </div>
                <p>
                    Originario de Nueva San Salvador (actual Santa Tecla), fue líder del movimiento de independencia en 1811 y es considerado "El Padre de la Patria".
                </p>
            </section>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">María de Baratta</h4>
                <div class="personajes row">
                    <img src="assets/La Libertad/GUANACOS-MARIA-DE-BARATTA-7.jpg" class="img-persona">
                </div>
                <p>
                    Originario de Nueva San Salvador (actual Santa Tecla), fue líder del movimiento de independencia en 1811 y es considerado "El Padre de la Patria".
                </p>
            </section>
        </article>
    </main>
  `,
})
export class LaLibertadComponent {

}
