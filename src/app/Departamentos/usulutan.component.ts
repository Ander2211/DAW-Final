import { Component } from '@angular/core';

@Component({
  selector: 'app-usulutan',
  standalone: true,
  imports: [],
  template: `
  <main>
        <h2 id="nombreDept" class="pacific-cyan">Usulután</h2>
        
        <article><!--Información general y municipios-->            <img src="assets/departamentos/usulutan.png" id="imgDept">
            <p>Usulután, cuyo nombre significa "ciudad de ocelotes" en náhuatl, es un departamento con una rica historia y diversidad geográfica. Fundado en 1865, ha sido un centro agrícola y cultural en la región oriental de El Salvador.</p>
            <h4>Municipios:</h4>
            <ol class="row">
                <div class="col-sm-3">
                    <li>Alegría</li>
                    <li>Berlín</li>
                    <li>California</li>
                    <li>Concepción Batres</li>
                    <li>El Triunfo</li>
                    <li>Ereguayquín</li>
                    <li>Estanzuelas</li>
                    <li>Jiquilisco</li>
                </div>
                <div class="col-sm-3">
                    <li>Jucuapa</li>
                    <li>Jucuarán</li>
                    <li>Mercedes Umaña</li>
                    <li>Nueva Granada</li>
                    <li>Ozatlán</li>
                    <li>Puerto El Triunfo</li>
                    <li>San Agustín</li>
                    <li>San Buenaventura</li>
                </div>
                <div class="col-sm-3">
                    <li>San Dionisio</li>
                    <li>San Francisco Javier</li>
                    <li>Santa Elena</li>
                    <li>Santa María</li>
                    <li>Santiago de María</li>
                    <li>Tecapán</li>
                    <li>Usulután (cabecera)</li>
                </div>
            </ol>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Centros turísticos</h3>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Laguna de Alegría</h4>                    <img src="assets/usulutan/Laguna-laAlegria.jpg">
                </div>
                <p>Conocida como "la esmeralda de América", esta laguna de origen volcánico es un atractivo natural rodeado de montañas y vegetación.</p>
            </section>
            <br>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Bahía de Jiquilisco</h4>                    <img src="assets/usulutan/Bahia-jiquilisco.jpg">
                </div>
                <p>Es la reserva de biosfera más grande de El Salvador, ideal para el ecoturismo, observación de aves y deportes acuáticos.</p>
            </section>
            <br>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Playa El Espino</h4>                    <img src="assets/usulutan/el-espino-1.jpg">
                </div>
                <p>Una de las playas más extensasy visitadas del país, conocida por su arena blanca y oleaje moderado.</p>
            </section>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Geografia</h3>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Ríos</h4>
                <div class="geografia">                    <img src="assets/san vicente/rio-achuapa.jpg" class="img-geo">
                    <p class="info-geo">
                        Río Grande de San Miguel
                        <br>
                        Uno de los principales ríos que atraviesa el departamento, esencial para la irrigación y actividades agrícolas.
                    </p>
                </div>
            </section>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Volcanes</h4>
                <div class="geografia">
                    <p class="info-geo">
                        Volcán Tecapa
                        <br>
                        Cerca de la ciudad de Alegría, este volcán ofrece vistas panorámicas y es un punto de interés para excursionistas.
                    </p>                    <img src="assets/usulutan/Volca-usulutan.jpg" class="img-geo">
                </div>
            </section>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Personajes Célebres</h3>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Álvaro Torres</h4>
                <div class="personajes row">                    <img src="assets/usulutan/Alvaro_en_Cuba01.jpg" class="img-persona">
                </div>
                <p>
                    Torres es un cantautor que ha alcanzado reconocimiento internacional.Conocido por éxitos como "Nada se compara contigo", ha representado a El Salvador en escenarios mundiales, consolidándose como una de las voces más emblemáticas del país.
                </p>
            </section>
            <br>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Schafik Hándal</h4>
                <div class="personajes row">                    <img src="assets/usulutan/schafik-handal-autor.jpg" class="img-persona">
                </div>
                <p>
                    Nacido el 13 de octubre de 1930 en Usulután, Hándal fue un influyente político y líder de la izquierda salvadoreña. Participó activamente en el Frente Farabundo Martí para la Liberación Nacional (FMLN) y desempeñó un papel crucial en los procesos políticos del país durante varias décadas.
                </p>
            </section>
            <br>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Fredy Naín Orantes</h4>
                <div class="personajes row">                    <img src="assets/usulutan/fredy.jpg" class="img-persona">
                </div>
                <p>
                    Artista plástico residente en la ciudad de Usulután, Orantes ha dedicado gran parte de su vida a la pintura, contribuyendo al enriquecimiento cultural de la región con su arte.
                </p>
            </section>
        </article>
    </main>
  `,
})
export class UsulutanComponent {

}
