import { Component } from '@angular/core';

@Component({
  selector: 'app-cuscatlan',
  standalone: true,
  imports: [],
  template: `
  <main>
        <h2 id="nombreDept" class="pacific-cyan">Cuscatlán</h2>
        
        <article><!--Información general y municipios-->
            <img src="assets/departamentos/cusca.png" id="imgDept">
            <p>De población pipil precolombina, su nombre etimológicamente significa “lugar de joyas y collares”.</p>
            <h4>Municipios:</h4>
            <ol class="row">
                <div class="col-sm-3">
                    <li>Suchitoto</li>
                    <li>San José Guayabal</li>
                    <li>Oratorio de Concepción</li>
                    <li>San Bartolomé Perulapía</li>
                    <li>Cojutepeque</li>
                    <li>Candelaria</li>
                    <li>El Carmen</li>
                </div>
                <div class="col-sm-3">
                    <li>El Rosario</li>
                    <li>Monte San Juan</li>
                    <li>San Cristóbal</li>
                    <li>San Rafael Cedros</li>
                    <li>San Ramón</li>
                    <li>Santa Cruz Analquito</li>
                    <li>Santa Cruz Michapa</li>
                </div>
                <div class="col-sm-3">
                    <li>Tenancingo</li>
                </div>
            </ol>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Centros turísticos</h3>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Cascada Los Tercios</h4>
                    <img src="assets/cuscatlan/cascada_lostercios.jpg">
                </div>
                <p>Un hermoso salto de agua ubicado en Suchitoto. Es un lugar ideal para disfrutar de la naturaleza y realizar caminatas en un entorno tranquilo.</p>
            </section>
            <br>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Iglesia Santa Lucía Suchitoto</h4>
                    <img src="assets/cuscatlan/Iglesia-Santa-Lucía-Suchitoto.jpg">
                </div>
                <p>Una hermosa iglesia colonial ubicada en el corazón del pintoresco pueblo de Suchitoto. Con su arquitectura impresionante y su rica historia, es una visita obligada para cualquier viajero que visite Cuscatlán.</p>
            </section>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Geografia</h3>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Lagos</h4>
                <div class="geografia">
                    <img src="assets/cuscatlan/lago_ilopango.jpg" class="img-geo">
                    <p class="info-geo">
                        Lago de Ilopango
                        <br>
                        Lago de Ilopango: Es el lago más grande de El Salvador. Es de origen volcánico y es ideal para realizar buceo, surf de remo, kayaks, jet ski, natación, paseo en lancha, pescar, entre otros.
                    </p>
                </div>
            </section>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Cerros</h4>
                <div class="geografia">
                    <img src="assets/cuscatlan/cerro_guazapa.jpg" class="img-geo">
                    <p class="info-geo">
                        Cerro Guazapa
                        <br>
                        Cuscatlán comparte este cerro con San Salvador. La cima alcanza 1438 metros sobre el nivel del mar. 
                        Hace miles de años fue un volcán activo del tipo Estratovolcán. Probablemente la erosión o una explosión fuerte, 
                        destruyera la forma cónica característica de este tipo de volcanes. Se desconoce si en un futuro pueda volver a ser un 
                        volcán activo. Fue uno de los principales escenarios de la guerra civil salvadoreña. Por su variada flora y fauna es considerado 
                        un sitio de interés para la práctica del turismo ecológico.
                    </p>
                </div>
            </section>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Personajes Célebres</h3>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Raúl Contreras</h4>
                <div class="personajes row">
                    <img src="assets/cuscatlan/raul_contreras1.jpg" class="img-persona">
                    <img src="assets/cuscatlan/raul_contreras2.webp" class="img-persona">
                    <img src="assets/cuscatlan/raul_contreras3.webp" class="img-persona">
                </div>
                <p>
                    Nació en Cojutepeque en 1896 y fallece en Madrid, España en 1973. En “El Rincón de los Poetas”, ubicado en el balneario 
                    Los Chorros, reposan los restos de este fabuloso cultivador de las formas clásicas, especialmente el soneto. Fue Miembro de Número 
                    de la Academia Salvadoreña de la Lengua. Escribió dos obras de teatro: “La Princesa está Triste” y “Cagliostro”. En poesía: “Presencia de Humo”, 
                    “En la otra Orilla” y “Niebla”.
                </p>
            </section>
        </article>
    </main>
  `,
})
export class CuscatlanComponent {

}
