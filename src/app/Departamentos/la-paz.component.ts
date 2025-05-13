import { Component } from '@angular/core';

@Component({
  selector: 'app-la-paz',
  standalone: true,
  imports: [],
  template: `
  <main>
        <h2 id="nombreDept" class="pacific-cyan">La Paz</h2>
        
        <article><!--Información general y municipios-->
            <img src="assets/departamentos/paz.png" id="imgDept">
            <p>Su nombre etimológicamente en nahuat significa: “La morada de los pececitos”.</p>
            <p>En 1814, la ciudad de Zacatecoluca protagonizó uno de los episodios más significativos del movimiento independentista salvadoreño, cuando los nonualcos se alzaron en armas, tomaron la población y obligaron a su intendente a proclamar la emancipación. Una vez lograda ésta, la creciente población de Zacatecoluca determinó que en 1823 fuera elevada a la categoría de villa, alcanzando la de ciudad en 1844. Definitivamente fue establecida por Ley como cabecera departamental el 21 de febrero de 1852 por el gobierno del Doctor Francisco Dueñas.</p>
            <h4>Municipios:</h4>
            <ol class="row">
                <div class="col-sm-3">
                    <li>Zacatecoluca</li>
                    <li>Cuyultitán</li>
                    <li>El Rosario</li>
                    <li>Jerusalén</li>
                    <li>Mercedes La Ceiba</li>
                    <li>Olocuilta</li>
                    <li>Paraíso de Osorio</li>
                    <li>San Antonio Masahuat</li>
                </div>
                <div class="col-sm-3">
                    <li>San Emigdio</li>
                    <li>San Francisco Chinameca</li>
                    <li>San Juan Nonualco</li>
                    <li>San Juan Talpa</li>
                    <li>San Juan Tepezontes</li>
                    <li>San Luis La Herradura</li>
                    <li>San Luis Talpa</li>
                </div>
                <div class="col-sm-3">
                    <li>San Miguel Tepezontes</li>
                    <li>San Pedro Masahuat</li>
                    <li>San Pedro Nonualco</li>
                    <li>San Rafael Obrajuelo</li>
                    <li>Santa María Ostuma</li>
                    <li>Santiago Nonualco</li>
                    <li>Tapalhuaca</li>
                </div>
            </ol>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Centros turísticos</h3>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Playa Costa del Sol</h4>
                    <img src="assets/la-paz/costa-del-sol.jpg">
                </div>
                <p>Es un paraíso tropical que combina el océano, el estero y la vegetación. La Costa del Sol ofrece al visitante una  perfecta combinación de atractivos que la hacen un destino de playa de clase mundial: una interminable playa de arena blanca, todo tipo de alojamientos, un muestra amplia de cocina salvadoreña e internacional, y el atractivo adicional de estar rodeado por un inmenso estero navegable.</p>
            </section>
            <br>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Olocuilta</h4>
                    <img src="assets/la-paz/olocuilta.jpg">
                </div>
                <p>Tiene muchos pupusódromos. Las pupusas no paran de hacerse en este lugar...</p>
            </section>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Geografia</h3>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Lagos y ríos</h4>
                <div class="geografia">
                    <img src="assets/cuscatlan/lago_ilopango.jpg" class="img-geo">
                    <p class="info-geo">
                        Lago de Ilopango
                        <br>
                        Es de origen volcánico y en su interior se halla la isla Cerro Los Patos. Con alrededor de 4,300 ha, es el segundo más grande cuerpo de agua salobre de El Salvador, así como una de las principales extensiones de bosque salado.
                    </p>
                </div>
            <br>
                <div class="geografia">
                    <p class="info-geo">
                        Río Jiboa
                        <br>
                        Tiene una trayectoria en la dirección noreste-sudoeste, y desemboca en el Océano Pacífico. Su profundidad es de tres metros. En la actualidad, el Río Jiboa se ve amenazado por diversos factores como la práctica descontrolada de desforestación de árboles, la crianza arcaica de ganado, el corte de la caña de azúcar, sin precauciones adecuadas, vertido de aguas negras; excesivo uso de agroquímicos y el aprovechamiento comercial de sus minerales pétrios. Además se suma la desproporcionada extracción de las aguas del río para ser utilizadas en las fábricas de cementos y otros productos de explotación comercial, generando serios riesgos para el cauce del Jiboa, que ya lleva más de 30 años disminuyendo rápidamente y con una continuidad en ese descenso cada nuevo período anual.
                    </p>
                    <img src="assets/la-paz/jiboa.jpg" class="img-geo">
                </div>
            </section>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Volcanes</h4>
                <div class="geografia">
                    <img src="assets/san vicente/Volcan-Chinchontepeq.jpg" class="img-geo">
                    <p class="info-geo">
                        Volcán Chinchontepec
                        <br>
                        Comparte este volcán con San Vicente. Imponente volcán que, según la perspectiva, asemeja la figura de una mujer acostada. A sus faldas se encuentran fumarolas y fuentes de aguas termales. 
                    </p>
                </div>
            </section>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Personajes Célebres</h3>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Camilo Minero</h4>
                <div class="personajes row">
                    <img src="assets/la-paz/camilo1.jpg" class="img-persona">
                    <img src="assets/la-paz/camilo2.jpg" class="img-persona">
                    <img src="assets/la-paz/camilo3.jpg" class="img-persona">
                </div>
                <p>
                    Desde pequeño participaba en concursos de pintura, y estudió casi cuatro años con Marcelino Carballo; en 1935 se muda a San Salvador y vivirá ahí hasta 1957; en ese tiempo estudia en la Escuela Nacional de Artes Gráficas y trabaja en la elaboración de escenografías del teatro Nacional; además fundó la Sociedad de Pintores Jóvenes de El Salvador en 1957, año en el que el Gobierno de El Salvador le otorga una beca para estudiar en el Instituto Politécnico Nacional de México, en el taller de Gráfica Popular hasta 1960. En esa época el Muralismo Mexicano estaba en auge aún, fue el movimiento artístico más importante de la historia del arte de México y uno de los más relevantes en Latinoamérica. Por lo general los temas que este movimiento abordaba eran relacionados a la historia de la revolución y reivindicaciones sociales para los obreros e indígenas.
                </p>
            </section>
        </article>
    </main>
  `,
})
export class LaPazComponent {

}
