import { Component } from '@angular/core';

@Component({
  selector: 'app-chalatenango',
  standalone: true,
  imports: [],
  template: `
  <main>
  <h2 id="nombreDept" class="pacific-cyan">Chalatenango</h2>
  
  <article><!--Información general y municipios-->
      <img src="assets/departamentos/chalate.png" id="imgDept">
      <p>Chalatenango es donde el verde de las montañas se encuentra con la calidez de su gente. 
          Es conocido por su clima fresco, ideal para el cultivo de café y hortalizas, y por sus 
          paisajes naturales impresionantes.</p>
      <h4>Municipios:</h4>
      <ol class="row">
          <div class="col-sm-2">
              <li>La Palma</li>
              <li>Citalá</li>
              <li>San Ignacio</li>
              <li>Nueva Concepción</li>
              <li>Tejutla</li>
              <li>La Reina</li>
              <li>Agua Caliente</li>
          </div>
          <div class="col-sm-2">
              <li>Dulce Nombre de María</li>
              <li>El Paraíso</li>
              <li>San Fernando</li>
              <li>San Francisco Morazán</li>
              <li>San Rafael</li>
              <li>Santa Rita</li>
              <li>Chalatenango</li>
          </div>
          <div class="col-sm-2">
              <li>Arcatao</li>
              <li>Azacualpa</li>
              <li>Comalapa</li>
              <li>Concepción Quezaltepeque</li>
              <li>El Carrizal</li>
              <li>La Laguna</li>
              <li>Las Vueltas</li>
          </div>
          <div class="col-sm-2">
              <li>Nombre de Jesús</li>
              <li>Nueva Trinidad</li>
              <li>Ojos de Agua</li>
              <li>Potonico</li>
              <li>San Antonio de la Cruz</li>
              <li>San Antonio de Los Ranchos</li>
              <li>San Francisco Lempa</li>
          </div>
          <div class="col-sm-3">
              <li>San Isidro Labrador</li>
              <li>San José Cancasque</li>
              <li>San Miguel de Mercedes</li>
              <li>San José de las Flores</li>
              <li>San Luis del Carmen</li>
          </div>
      </ol>
  </article>
  <article>
      <h3 class="tema honolulu-blue">Centros turísticos</h3>
      <section>
          <div class="turismo">
              <h4 class="titulo-n3 vivid-sky-blue">Mirador El Alto</h4>
              <img src="assets/Chalatenango/miradorelalto.jpg">
          </div>
          <p>Mirador turístico con vistas impresionantes de montañas y valles de Chalatenango.</p>
      </section>
  </article>
  <article>
      <h3 class="tema honolulu-blue">Geografia</h3>
      <section>
          <h4 class="titulo-n3 vivid-sky-blue">Lagos</h4>
          <div class="geografia">
              <img src="assets/Chalatenango/lago-suchitlan-1.jpg" class="img-geo">
              <p class="info-geo">
                  Lago Suchitlán
                  <br>
                  Lago artificial formado por la presa del Cerrón Grande, ideal para el turismo ecológico y avistamiento de aves.
              </p>
          </div>
      </section>
      <section>
          <h4 class="titulo-n3 vivid-sky-blue">Cerros</h4>
          <div class="geografia">
              <img src="assets/Chalatenango/cerro-el-pital-1.jpg" class="img-geo">
              <p class="info-geo">
                  Cerro El Pital
                  <br>
                  Punto más alto de El Salvador (2,730 m), famoso por su clima frío y bosque nuboso.
              </p>
          </div>
      <br>
          <div class="geografia">
              <p class="info-geo">
                  Cerro El Ermón
                  <br>
                  Elevación de 1,500 m con senderos y paisajes rurales, conocido por sus vistas panorámicas.
              </p>
              <img src="assets/Chalatenango/cerroEramon-1.png" class="img-geo">
          </div>
      </section>
      <section>
          <h4 class="titulo-n3 vivid-sky-blue">Ríos</h4>
          <div class="geografia">
              <img src="assets/Chalatenango/rio-sumplul-2.jpg" class="img-geo">
              <p class="info-geo">
                  Río Sumpul
                  <br>
                  Río histórico que delimita parte de la frontera con Honduras, recordado por eventos trágicos durante la guerra civil.
              </p>
          </div>
      </section>
  </article>
  <article>
      <h3 class="tema honolulu-blue">Personajes Célebres</h3>
      <section>
          <h4 class="titulo-n3 vivid-sky-blue">Miguel Mármol</h4>
          <div class="personajes row">
              <img src="assets/Chalatenango/miguelMarmol.jpg" class="img-persona">
          </div>
          <p>
              Líder sindical y figura emblemática del movimiento obrero salvadoreño. Sobrevivió 
              a la Masacre de 1932 y su vida fue narrada por Roque Dalton en el libro "Miguel Mármol".
          </p>
      </section>
  </article>
</main>
  `,
})
export class ChalatenangoComponent {

}
