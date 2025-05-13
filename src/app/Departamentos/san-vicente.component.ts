import { Component } from '@angular/core';

@Component({
  selector: 'app-san-vicente',
  standalone: true,
  imports: [],
  template: `
  <main>
        <h2 id="nombreDept" class="pacific-cyan">San Vicente</h2>
        
        <article><!--Información general y municipios-->
            <img src="assets/departamentos/vicente.png" id="imgDept">
            <p>San Vicente es uno de los departamentos más antiguos de El Salvador, fundado en 1635 por familias españolas desterradas de Apastepeque, Tepetitán e Ixtepeque.</p>
            <p>Inicialmente, se le denominó San Vicente de Lorenzana y posteriormente San Vicente de Austria al recibir el título de villa en 1658. Durante la primera etapa de los procesos independentistas, el Capitán General José de Bustamante y Guerra solicitó el título de ciudad, otorgado el 11 de julio de 1812. </p>
            <h4>Municipios:</h4>
            <ol class="row">
                <div class="col-sm-3">
                    <li>Apastepeque</li>
                    <li>Guadalupe</li>
                    <li>San Cayetano Istepeque</li>
                    <li>San Esteban Catarina</li>
                    <li>San Ildefonso</li>
                </div>
                <div class="col-sm-3">
                    <li>San Lorenzo</li>
                    <li>San Sebastián</li>
                    <li>San Vicente (cabecera)</li>
                    <li>Santa Clara</li>
                </div>
                <div class="col-sm-3">
                    <li>Santo Domingo</li>
                    <li>Tecoluca</li>
                    <li>Tepetitán</li>
                    <li>Verapaz</li>
                </div>
            </ol>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Centros turísticos</h3>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Laguna de Apastepeque</h4>
                    <img src="assets/san vicente/Apastepeque-el-salvador.jpeg">
                </div>
                <p>Un atractivo natural donde los visitantes pueden disfrutar de actividades como pesca, natación y deportes acuáticos.</p>
            </section>
            <br>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Centro Turístico Amapulapa</h4>
                    <img src="assets/san vicente/amapulapa.jpg">
                </div>
                <p>Cuenta con cinco piscinas, restaurantes y áreas de esparcimiento familiar.</p>
            </section>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Los Infiernillos de Guadalupe</h4>
                    <img src="assets/san vicente/Infernillos-de-Guadalupe-1.jpg">
                </div>
                <p>Destino ideal para el turismo medicinal y de aventura, conocido por sus pozas de aguas termales y fumarolas con beneficios para la salud.</p>
            </section>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Geografia</h3>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Ríos</h4>
                <div class="geografia">
                    <img src="assets/san vicente/rio-achuapa.jpg" class="img-geo">
                    <p class="info-geo">
                        Río Achuapa
                        <br>
                        Afluente que atraviesa el departamento y es fundamental para la agricultura local.
                    </p>
                </div>
            </section>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Volcanes</h4>
                <div class="geografia">
                    <p class="info-geo">
                        Volcán de San Vicente (Chinchontepec)
                        <br>
                        Imponente volcán que, según la perspectiva, asemeja la figura de una mujer acostada. A sus faldas se encuentran fumarolas y fuentes de aguas termales.
                    </p>
                    <img src="assets/san vicente/Volcan-Chinchontepeq.jpg" class="img-geo">
                </div>
            </section>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Personajes Célebres</h3>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Antonio José Cañas</h4>
                <div class="personajes row">
                    <img src="assets/san vicente/Antonio-José-Cañas.jpg" class="img-persona">
                    <img src="assets/san vicente/Antonio-2.jpg" class="img-persona">
                </div>
                <p>
                    Sus restos reposan en la Iglesia de Nuestra Señora del Pilar en San Vicente.
                </p>
            </section>
        </article>
    </main>
  `,
})
export class SanVicenteComponent {

}
