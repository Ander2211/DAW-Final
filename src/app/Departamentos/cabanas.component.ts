import { Component } from '@angular/core';

@Component({
  selector: 'app-cabanas',
  standalone: true,
  imports: [],
  template: `
  <main>
        <h2 id="nombreDept" class="pacific-cyan">Cabañas</h2>
        
        <article><!--Información general y municipios-->
            <img src="assets/departamentos/cabañas.png" id="imgDept">
            <p>Con su creación datando del 10 de febrero de 1873, es el dapartamento más joven del país.</p>
            <p>El departamento se caracteriza por la ganadería y la producción de lácteos. La fama de sus artesanías lo posicionan tanto dentro como fuera del país, especialmente por sus figuras y artículos de barro, hechos en el municipio de Ilobasco</p>
            <h4>Municipios:</h4>
            <ol class="row">
                <div class="col-sm-3">
                    <li>Cinquera</li>
                    <li>Ilobasco</li>
                    <li>Jutiapa</li>
                    <li>Tejutepeque</li>
                    <li>Dolores</li>
                </div>
                <div class="col-sm-3">
                    <li>Guacotecti</li>
                    <li>San Isidro</li>
                    <li>Sensuntepeque</li>
                    <li>Victoria</li>
                </div>
            </ol>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Centros turísticos</h3>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Parque Central de Ilobasco</h4>
                    <img src="assets/cabañas/parque_central.jpg">
                </div>
                <p>Es un espacio público donde podrás disfrutar de un ambiente tranquilo y relajado. Aquí podrás encontrar áreas verdes, bancas para descansar y monumentos históricos.</p>
            </section>
            <br>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Parque Ecológico de Cinquera</h4>
                    <img src="assets/cabañas/parque_ecologico.jpg">
                </div>
                <p>Es un área protegida que alberga una gran diversidad de flora y fauna. Aquí podrás disfrutar de actividades al aire libre como senderismo, avistamiento de aves y paseos en bote.</p>
            </section>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Geografia</h3>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Lagos y ríos</h4>
                <div class="geografia">
                    <img src="assets/cabañas/cascada_elsalto.jpg" class="img-geo">
                    <p class="info-geo">
                        Cascada El Salto San Antonio
                        <br>
                        Es una maravillosa atracción natural que ofrece un espectáculo impresionante de agua cayendo desde lo alto. Disfruta de la exuberante flora y fauna mientras caminas por el sendero que te lleva a esta hermosa cascada.
                    </p>
                </div>
            </section>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Volcanes</h4>
                <div class="geografia">
                    <p class="info-geo">
                        Cerro El Picacho
                        <br>
                        El Picacho es una prominencia del volcán de San Salvador, formada como consecuencia de erupciones volcánicas pasadas, ocurridas hace miles de años cuando el volcán perdió 1000 m de altitud.
                    </p>
                    <img src="assets/cabañas/picacho.jpg" class="img-geo">
                </div>
            </section>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Personajes Célebres</h3>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Maura Echeverría</h4>
                <div class="personajes row">
                    <img src="assets/cabañas/maura-3.jpg" class="img-persona">
                    <img src="assets/cabañas/maura.jpg" class="img-persona">
                </div>
                <p>
                    Escribió entre 1971 y 1972  los libros de Estudios Sociales para cuarto, quinto y sexto grados de Educación Básica. Y además fue coautora de los libros de Estudios Sociales para séptimo, octavo y noveno grados de Educación Básica. Uno de los más gratos recuerdos de Maura Echeverría es cuando visitó en 1973 a Claudia Lars en su domicilio, a fin de solicitar consejos  y evaluación de sus poemas; una de las cosas que más la impresionó fue ver  la dulzura, la paciencia y la gentileza de Claudia al revisar sus textos, muy a pesar de lo avanzada que estaba su enfermedad mortal. Maura recuerda que Claudia le sugirió varias cosas que la ayudaron con respecto a su poesía. Un año más tarde la más grande poeta de El Salvador y de Latinoamérica moriría. “Palabras sobre el fuego” y “Con el dedo en la llaga” fueron sus primeros dos libros de poesía, con los cuales decidió participar en algunos concursos, ambos inéditos y actualmente perdidos. Es conveniente mencionar que fue Rafael Mendoza quien la invitó a recopilar sus poemas sueltos para presentarlos en el Vigésimo Primer Torneo Cultural Centroamericano, realizado en 1974 e impulsado por la Asociación de Estudiantes de Derecho (AED) de la Universidad de El Salvador, en donde obtuvo mención honorífica en la rama de poesía.
                </p>
            </section>
        </article>
    </main>
  `,
})
export class CabanasComponent {

}
