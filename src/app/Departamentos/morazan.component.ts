import { Component } from '@angular/core';

@Component({
  selector: 'app-morazan',
  standalone: true,
  imports: [],
  template: `
  <main>
        <h2 id="nombreDept" class="pacific-cyan">Morazán</h2>
        
        <article><!--Información general y municipios-->
            <img src="assets/departamentos/morazan.png" id="imgDept">
            <p>Morazán, un departamento ubicado en el extremo oriental de El Salvador, se distingue por su historia y patrimonio cultural, así como por sus paisajes naturales. Su capital, San Francisco Gotera, actúa como el núcleo político y administrativo de esta región, que limita al norte con Honduras, al este con La Unión, y al sur y al oeste con San Miguel.</p>
            <p>La región de Morazán estuvo originalmente habitada por pueblos indígenas lencas antes de la llegada de los conquistadores españoles. Durante la guerra civil salvadoreña, entre 1980 y 1992, Morazán fue una de las zonas más afectadas por el conflicto. La Masacre de El Mozote, ocurrida en diciembre de 1981, es el evento más tristemente célebre, donde más de 1,000 campesinos perdieron la vida. Este episodio no solo dejó huellas indelebles en el colectivo salvadoreño, sino que también marcó a nivel internacional el grado de violencia del conflicto armado.</p>
            <h4>Municipios:</h4>
            <ol class="row">
                <div class="col-sm-3">
                    <li>Arambala</li>
                    <li>Cacaopera</li>
                    <li>Chilanga</li>
                    <li>Corinto</li>
                    <li>Delecias de Concepción</li>
                    <li>El Divisadero</li>
                    <li>El Rosario</li>
                    <li>Gualococti</li>
                    <li>Joateca</li>
                </div>
                <div class="col-sm-3">
                    <li>Jocoaitique</li>
                    <li>Jocoro</li>
                    <li>Lolotiquillo</li>
                    <li>Meanguera</li>
                    <li>Osicala</li>
                    <li>Perquín</li>
                    <li>San Carlos</li>
                    <li>San Fernando</li>
                </div>
                <div class="col-sm-3">
                    <li>San Francisco Gotera</li>
                    <li>San Isidro</li>
                    <li>San Simón</li>
                    <li>Sensembra</li>
                    <li>Sociedad</li>
                    <li>Torola</li>
                    <li>Yamabal</li>
                    <li>Yoloaiquín</li>
                </div>
            </ol>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Centros turísticos</h3>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Museo de la Revolución Salvadoreña en Perquín</h4>
                    <img src="assets/Morazan/museo.jpg">
                </div>
                <p>Este pequeño pueblo alberga el Museo de la Revolución, que muestra la historia del conflicto armado en El Salvador durante la década de 1980.</p>
            </section>
            <br>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Ruta de la Paz</h4>
                    <img src="assets/Morazan/Mapa-Circuito-Memoria-Paisajes.png">
                </div>
                <p>Un recorrido que incluye los municipios de Meanguera, Jocoaitique, El Rosario, Arambala, Joateca, Perquín, San Fernando y Torola, ofreciendo una visión de la historia y cultura de la región. </p>
            </section>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Geografia</h3>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Ríos</h4>
                <div class="geografia">
                    <img src="assets/Morazan/rio-torola.jpg" class="img-geo">
                    <p class="info-geo">
                        Río Torola
                        <br>
                        Con paisajes impresionantes que incluyen ríos cristalinos como el Torola.
                    </p>
                </div>
            <br>
                <div class="geografia">
                    <p class="info-geo">
                        Cascada El Perol
                        <br>
                        La cascada El Perol se encuentra en el Llano del Muerto, un área de al menos 6,000 hectáreas de pinares en el municipio de Perquín, Morazán. En este lugar se encuentran nacimientos de agua que recorren la zona hasta llegar a la cuenca del río Sapo.
                    </p>
                    <img src="assets/Morazan/cascada-ruta-de-paz.jpg" class="img-geo">
                </div>
            </section>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Cerros</h4>
                <div class="geografia">
                    <img src="assets/Morazan/cerro.jpg" class="img-geo">
                    <p class="info-geo">
                        Cerro Cacahuatique
                        <br>
                        Con una altitud de 1,663 metros sobre el nivel del mar, es el punto más alto del departamento, ofreciendo vistas espectaculares y oportunidades para el senderismo.
                    </p>
                </div>
            </section>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Personajes Célebres</h3>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Fidel Sánchez Hernández</h4>
                <div class="personajes row">
                    <img src="assets/Morazan/pre22.jpg" class="img-persona">
                    <img src="assets/Morazan/pre.jpg" class="img-persona">
                    <img src="assets/Morazan/Fidel-Sanchez-Hernandez.jpg" class="img-persona">
                </div>
                <p>
                    Fidel Sánchez Hernández fue un político y militar salvadoreño quien se desempeñó como presidente de la república de El Salvador. Descatado miembro del Partido de Concertación Nacional, se convirtió en el segundo presidente quien formaba parte de este partido.
                </p>
            </section>
        </article>
    </main>
  `,
})
export class MorazanComponent {

}
