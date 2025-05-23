import { Component } from '@angular/core';

@Component({
  selector: 'app-san-salvador',
  standalone: true,
  imports: [],
  template: `
    <main>
      <h2 id="nombreDept" class="pacific-cyan">San Salvador</h2>

      <article>
        <!--Información general y municipios-->
        <img src="assets/departamentos/ss40.png" id="imgDept" />
        <p>
          San Salvador, la capital y centro neurálgico de El Salvador, es una
          ciudad que late con historia, cultura y modernidad. Fundada en 1525
          por el conquistador español Gonzalo de Alvarado, es hoy el hogar de
          más de medio millón de personas. Su paisaje es una mezcla de
          arquitectura colonial y edificios modernos, enmarcados por el
          imponente Volcán de San Salvador.
        </p>
        <h4>Municipios:</h4>
        <ol class="row">
          <div class="col-sm-3">
            <li>Aguilares</li>
            <li>Apopa</li>
            <li>Ayutuxtepeque</li>
            <li>El Painsal</li>
            <li>Guazapa</li>
            <li>Nejapa</li>
            <li>Ilopango</li>
          </div>
          <div class="col-sm-3">
            <li>San Martín</li>
            <li>Soyapango</li>
            <li>Tonacatepeque</li>
            <li>Mejicanos</li>
            <li>Cuscatancingo</li>
            <li>Ciudad Delgado</li>
            <li>San Salvador</li>
          </div>
          <div class="col-sm-3">
            <li>San Marcos</li>
            <li>Santo Tomá</li>
            <li>Santiago Texacuangos</li>
            <li>Panchimalco</li>
            <li>Rosario de Mora</li>
          </div>
        </ol>
      </article>
      <article>
        <h3 class="tema honolulu-blue">Centros turísticos</h3>
        <section>
          <div class="turismo">
            <h4 class="titulo-n3 vivid-sky-blue">Iglesia El Rosario</h4>
            <img src="assets/San Salvador/elrosario.jpg" />
          </div>
          <p>
            Iglesia moderna con arquitectura única y vitrales coloridos que
            proyectan luces impresionantes en su interior.
          </p>
        </section>
        <br />
        <section>
          <div class="turismo">
            <h4 class="titulo-n3 vivid-sky-blue">Parque Cuscatlán</h4>
            <img src="assets/San Salvador/Parque_Cuscatlán.jpg" />
          </div>
          <p>
            Parque urbano renovado con espacios culturales y recreativos,
            incluyendo el Memorial de las Víctimas de la Violencia.
          </p>
        </section>
        <section>
          <div class="turismo">
            <h4 class="titulo-n3 vivid-sky-blue">
              MUNA (Museo Nacional de Antropología David J. Guzmán)
            </h4>
            <img src="assets/San Salvador/muna.png" />
          </div>
          <p>Museo que preserva y exhibe la historia y cultura salvadoreña.</p>
        </section>
        <section>
          <div class="turismo">
            <h4 class="titulo-n3 vivid-sky-blue">Puerta del Diablo</h4>
            <img src="assets/San Salvador/PUERTA-DEL-DIABLO.jpg" />
          </div>
          <p>
            Formación rocosa y mirador con vistas panorámicas de San Salvador y
            el Pacífico, ideal para senderismo.
          </p>
        </section>
      </article>
      <article>
        <h3 class="tema honolulu-blue">Geografia</h3>
        <section>
          <h4 class="titulo-n3 vivid-sky-blue">Ríos</h4>
          <div class="geografia">
            <img src="assets/San Salvador/rioAcelhuate.jpg" class="img-geo" />
            <p class="info-geo">
              Río Acelhuate
              <br />
              Río urbano que atraviesa San Salvador, históricamente afectado por
              contaminación.
            </p>
          </div>
        </section>
        <section>
          <h4 class="titulo-n3 vivid-sky-blue">Volcanes</h4>
          <div class="geografia">
            <img src="assets/San Salvador/volcandeSS.png" class="img-geo" />
            <p class="info-geo">
              Volcán de San Salvador (El Boquerón)
              <br />
              Volcán activo con un cráter de 1.5 km de diámetro, rodeado por un
              parque nacional.
            </p>
          </div>
        </section>
        <section>
          <h4 class="titulo-n3 vivid-sky-blue">Cerros</h4>
          <div class="geografia">
            <img
              src="assets/San Salvador/cerroSanJacinto.jpg"
              class="img-geo"
            />
            <p class="info-geo">
              Cerro de San Jacinto
              <br />
              Elevación de 1,200 m con vistas panorámicas de la capital; fue
              famoso por su teleférico.
            </p>
          </div>
        </section>
      </article>
      <article>
        <h3 class="tema honolulu-blue">Personajes Célebres</h3>
        <section>
          <h4 class="titulo-n3 vivid-sky-blue">Óscar Arnulfo Romero</h4>
          <div class="personajes row">
            <img src="assets/San Salvador/matias3.jpg" class="img-persona" />
            <img src="assets/San Salvador/matias.jpeg" class="img-persona" />
            <img src="assets/San Salvador/matias2.jpg" class="img-persona" />
          </div>
          <p>
            José Matías Delgado fue una de las figuras más influyentes en la
            historia de la independencia de Centroamérica. Nació el 24 de
            febrero de 1767 en San Salvador, en una época en la que el dominio
            español sobre la región era incuestionable. Desde joven mostró gran
            interés por la educación y la religión, lo que lo llevó a
            convertirse en sacerdote. Sin embargo, su vocación no se limitó solo
            a los asuntos eclesiásticos; pronto se involucró en la política y se
            convirtió en un ferviente defensor de la independencia de los
            pueblos centroamericanos.
          </p>
        </section>
        <section>
          <h4 class="titulo-n3 vivid-sky-blue">David Joaquín Guzmán</h4>
          <div class="personajes row">
            <img
              src="assets/San Salvador/davidjguzman.jpg"
              class="img-persona"
            />
          </div>
          <p>
            David Joaquín Guzmán (San Miguel, 15 de agosto de 1843-San Salvador,
            20 de enero de 1927), mayormente conocido como David J. Guzmán, fue
            un político, médico y escritor salvadoreño aficionado al estudio de
            la botánica, la zoología y la arqueología, y quien fundó el Museo
            Nacional de El Salvador y escribió la Oración a la Bandera
            Salvadoreña.
          </p>
        </section>
      </article>
    </main>
  `,
})
export class SanSalvadorComponent {}
