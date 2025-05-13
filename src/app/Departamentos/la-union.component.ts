import { Component } from '@angular/core';

@Component({
  selector: 'app-la-union',
  standalone: true,
  imports: [],
  template: `
  <main>
        <h2 id="nombreDept" class="pacific-cyan">La Unión</h2>
        
        <article><!--Información general y municipios-->
            <img src="assets/departamentos/union.png" id="imgDept">
            <p>El departamento de La Unión, ubicado en la zona oriental de El Salvador, destaca no solo por su posición estratégica frente al océano Pacífico y su proximidad con Honduras, sino también por la riqueza de su historia, cultura y recursos naturales. Este territorio tiene como cabecera departamental a la ciudad y puerto de La Unión, un importante centro económico y turístico.</p>
            <p>El 22 de junio de 1865, se estableció oficialmente La Unión como un departamento, seleccionando la ciudad homónima como su capital. Esta región tiene una trayectoria histórica que incluye hitos como la construcción del Templo de Conchagua en 1693, un legado colonial que permanece como símbolo cultural. Además, el departamento alberga sitios arqueológicos en lugares como Intipucá y Meanguera, vestigios que evidencian la presencia de antiguas civilizaciones precolombinas en la zona.</p>
            <h4>Municipios:</h4>
            <ol class="row">
                <div class="col-sm-3">
                    <li>Anamorós</li>
                    <li>Bolívar</li>
                    <li>Concepción de Oriente</li>
                    <li>Conchagua</li>
                    <li>El Carmen</li>
                    <li>El Sauce</li>
                </div>
                <div class="col-sm-3">
                    <li>Intipucá</li>
                    <li>Lislique</li>
                    <li>Meanguera del Golfo</li>
                    <li>Nueva Esparta</li>
                    <li>Pasaquina</li>
                    <li>Polorós</li>
                </div>
                <div class="col-sm-3">
                    <li>San Alejo</li>
                    <li>San José</li>
                    <li>Santa Rosa de Lima</li>
                    <li>Yayantique</li>
                    <li>Yucuaiquín</li>
                </div>
            </ol>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Centros turísticos</h3>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Templo de Conchagua</h4>
                    <img src="assets/La Union/Templo de Conchagua.jpg">
                </div>
                <p>Este histórico templo, con sus casi cuatro siglos de existencia, es una joya arquitectónica y un testimonio de la influencia colonial española.</p>
            </section>
            <br>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Jardín Botánico La Laguna</h4>
                    <img src="assets/La Union/jardin.jpg">
                </div>
                <p>El Jardín Botánico La Laguna, ubicado en el departamento de La Unión en El Salvador, es uno de los lugares más impresionantes del país para los amantes de la naturaleza y la biodiversidad. Este jardín botánico cuenta con una gran variedad de plantas y animales nativos, así como también con hermosos paisajes y lagunas.</p>
            </section>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Geografia</h3>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Islas y golfos</h4>
                <div class="geografia">
                    <img src="assets/La Union/Fonseca 1200.jpg" class="img-geo">
                    <p class="info-geo">
                        Islas del Golfo de Fonseca
                        <br>
                        La Unión posee una gran cantidad de islas bajo su jurisdicción, entre ellas Meanguera, Martín Pérez, Zacatillo, Perico, Periquito, Conejo y Chuchito.
                    </p>
                </div>
            <br>
                <div class="geografia">
                    <p class="info-geo">
                        Golfo de Fonseca
                        <br>
                        Este golfo es compartido entre El Salvador, Honduras y Nicaragua, ofreciendo vistas impresionantes y una rica biodiversidad marina. Los atardeceres aquí son espectaculares, convirtiéndolo en un lugar ideal para el ecoturismo y el descanso.
                    </p>
                    <img src="assets/La Union/playa-golfo.jpeg" class="img-geo">
                </div>
            </section>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Volcanes</h4>
                <div class="geografia">
                    <img src="assets/La Union/ConchaguaVolcano.jpg" class="img-geo">
                    <p class="info-geo">
                        Volcán de Conchagua
                        <br>
                        Este volcán no solo es el punto perfecto para disfrutar vistas del golfo, sino también un lugar para acampar bajo cielos despejados y observar las estrellas.
                    </p>
                </div>
            </section>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Personajes Célebres</h3>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Óscar Samuel Ortiz Ascencio</h4>
                <div class="personajes row">
                    <img src="assets/La Union/pre.jpg" class="img-persona">
                    <img src="assets/La Union/pres.jpg" class="img-persona">
                    <img src="assets/La Union/figuracelebre.jpg" class="img-persona">
                </div>
                <p>
                    Ortiz nació en el seno de una familia campesina. En 1977 se incorporó a las Fuerzas Populares de Liberación "Farabundo Martí" (FPL), una de las cinco organizaciones armadas que en 1980 conformaron el FMLN. Durante la guerra civil de El Salvador, adoptó el seudónimo de Comandante Guillermo Rodríguez. Desde 1981, Ortiz dirigió una columna guerrillera en el departamento de Usulután, en la zona oriental de El Salvador.
                </p>
            </section>
        </article>
    </main>

  `,
})
export class LaUnionComponent {

}
