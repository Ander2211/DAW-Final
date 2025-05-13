import { Component } from '@angular/core';

@Component({
  selector: 'app-san-miguel',
  standalone: true,
  imports: [],
  template: `
  <main>
        <h2 id="nombreDept" class="pacific-cyan">San Miguel</h2>

        <article><!--Información general y municipios-->
            <img src="assets/departamentos/miguel.png" id="imgDept">
            <p>El departamento de San Miguel combina una rica historia, una diversidad geográfica notable y una influencia cultural significativa en El Salvador.</p>
            <h4>Municipios:</h4>
            <ol class="row">
                <div class="col-sm-3">
                    <li>Chirilagua</li>
                    <li>Comacarán</li>
                    <li>Moncagua</li>
                    <li>Quelepa</li>
                    <li>San Miguel (cabecera)</li>
                    <li>Uluazapa</li>
                    <li>Carolina</li>
                </div>
                <div class="col-sm-3">
                    <li>Chapeltique</li>
                    <li>Ciudad Barrios</li>
                    <li>Nuevo Edén de San Juan</li>
                    <li>San Gerardo</li>
                    <li>San Luis de la Reina</li>
                    <li>Sesori</li>
                    <li>San Antonio</li>
                </div>
                <div class="col-sm-3">
                    <li>Chinameca</li>
                    <li>El Tránsito</li>
                    <li>Lolotique</li>
                    <li>Nueva Guadalupe</li>
                    <li>San Jorge</li>
                    <li>San Rafael Oriente</li>
                </div>
            </ol>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Centros turísticos</h3>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Playa El Cuco y Las Flores</h4>
                    <img src="assets/San miguel/Playa El Cuco y Las Flores.jpg">
                </div>
                <p>Playas reconocidas por su arena suave y olas ideales para el surf, atrayendo tanto a locales como a
                    turistas internacionales.</p>
            </section>
            <br>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Turicentro "Altos de La Cueva"</h4>
                    <img src="assets/San miguel/Altos de La Cueva.jpg">
                </div>
                <p>Un centro turístico que ofrece piscinas naturales y áreas de recreación familiar.</p>
            </section>
            <br>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Cuevas de Moncagua</h4>
                    <img src="assets/San miguel/Cuevas de Moncagua.jpg">
                </div>
                <p>Formaciones naturales que son un atractivo para los amantes de la espeleología y la aventura.</p>
            </section>
            <br>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Ausoles de Chinameca, San Jorge y Carolina</h4>
                    <img src="assets/San miguel/Ausoles de Chinameca, San Jorge y Carolina.jpg">
                </div>
                <p>Zonas geotérmicas con fumarolas y aguas termales, ideales para el turismo ecológico y de salud.</p>
            </section>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Geografia</h3>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Lagunas y ríos</h4>
                <div class="geografia">
                    <img src="assets/San miguel/Laguna-Olomega.jpg" class="img-geo">
                    <p class="info-geo">
                        Laguna de Olomega
                        <br>
                        La laguna más grande de El Salvador, ubicada en el municipio de El Carmen, es un sitio
                        importante para la pesca y la observación de aves.
                    </p>
                </div>
                <br>
                <div class="geografia">
                    <p class="info-geo">
                        Laguna El Jocotal
                        <br>
                        Un humedal de importancia internacional, reconocido por su biodiversidad y atractivo para
                        ecoturistas.
                    </p>
                    <img src="assets/San miguel/Laguna-El-Jocotal.jpg" class="img-geo">
                </div>
                <br>
                <div class="geografia">
                    <img src="assets/San miguel/Rio-grande.jpg" class="img-geo">
                    <p class="info-geo">
                        Río Grande de San Miguel
                        <br>
                        Uno de los principales ríos del departamento, esencial para la agricultura y otras actividades económicas locales.
                    </p>
                </div>
            </section>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Volcanes</h4>
                <div class="geografia">
                    <p class="info-geo">
                        Volcán de San Miguel (Chaparrastique)
                        <br>
                        Es el tercer volcán más alto de El Salvador y uno de los más activos, ofreciendo paisajes impresionantes y siendo un punto de interés para excursionistas y científicos.
                    </p>
                    <img src="assets/San miguel/Vulkan_Chaparrastique,_El_Salvador.jpg" class="img-geo">
                </div>
            </section>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Personajes Célebres</h3>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Francisco Gavidia</h4>
                <div class="personajes row">
                    <img src="assets/San miguel/Francisco-Gavidia-1.jpg" class="img-persona">
                    <img src="assets/San miguel/Francisco-Gavidia-2.jpg" class="img-persona">
                    <img src="assets/San miguel/Francisco-Gavidia-3.jpg" class="img-persona">
                </div>
                <p>
                    Escritor, poeta y educador nacido en San Miguel, considerado uno de los intelectuales más influyentes de El Salvador.
                </p>
            </section>
            <br>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">David Joaquín Guzmán</h4>
                <div class="personajes row">
                    <img src="assets/San miguel/David_Joaquín_Guzmán.jpg" class="img-persona">
                </div>
                <p>
                    Científico y naturalista migueleño, fundador del Museo Nacional de El Salvador que lleva su nombre.
                </p>
            </section>
            <br>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Miguel Félix Charlaix</h4>
                <div class="personajes row">
                    <img src="assets/San miguel/Miguel-felix.jpg" class="img-persona">
                </div>
                <p>
                    Político y diplomático originario de San Miguel, que desempeñó roles importantes en la historia política del país.
                </p>
            </section>
            <br>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Juan José Cañas</h4>
                <div class="personajes row">
                    <img src="assets/San miguel/juan-jose-canas.jpg" class="img-persona">
                </div>
                <p>
                    Poeta y militar, coautor de la letra del Himno Nacional de El Salvador, nacido en San Miguel.
                </p>
            </section>
        </article>
    </main>
  `,
})
export class SanMiguelComponent {

}
