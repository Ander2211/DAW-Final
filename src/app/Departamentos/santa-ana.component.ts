import { Component } from '@angular/core';

@Component({
  selector: 'app-santa-ana',
  standalone: true,
  imports: [],
  template: `
    <main>
        <h2 id="nombreDept" class="pacific-cyan">Santa Ana</h2>
        
        <article><!--Información general y municipios-->
            <img src="assets/departamentos/santana53.png" id="imgDept">
            <p>Conocida como "La Ciudad Morena", "Ciudad Heroica", "Capital del Mundo" y "Sucursal del Cielo" por considerarse una 
                de los lugares más importantes y distinguidos de El Salvador.</p>
            <p>Su centro histórico es uno de los mejores de Centroamérica, la ubicación casi perfecta de sus edificios alrededor del 
                parque Libertad, le han dado ese reconocimiento. Si visitas la Ciudad Morena, no puedes dejar de ir a la Catedral de Santa Ana, 
                declarada Patrimonio Cultural de El Salvador en 1995.</p>
            <p>
                Cerca también encuentras el Teatro Nacional, uno de los más hermosos y con mejor acústica y decoración de El Salvador, fue inaugurado 
                en 1910. También te gustará visitar el Palacio del Ayuntamiento, sede del gobierno municipal.
            </p>
            <h4>Municipios:</h4>
            <ol class="row">
                <div class="col-sm-3">
                    <li>Santa Ana (ciudad cabecera)</li>
                    <li>Candelaria de la Frontera</li>
                    <li>Chalchuapa</li>
                    <li>Coatepeque</li>
                    <li>El Congo</li>
                    <li>El Porvenir</li>
                    <li>Masahuat</li>
                </div>
                <div class="col-sm-3">
                    <li>Metapán</li>
                    <li>San Antonio Pajonal</li>
                    <li>San Sebatián Salitrillo</li>
                    <li>Santa Rosa Guachipilín</li>
                    <li>Santiago de la Frontera</li>
                    <li>Texistepeque</li>
                </div>
            </ol>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Centros turísticos</h3>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">El Tazumal</h4>
                    <img src="assets/Santa Ana/El-Tazumal.jpg">
                </div>
                <p>Está ubicado en el corazón de Chalchuapa, departamento de Santa Ana, a 80 kilómetros al occidente de la capital.</p>
                <p>
                    Esta zona está dentro de un área arqueológica de aproximadamente 10 km² en donde también se localizan sitios Arqueológicos como Pampe, 
                    El Trapiche, Las Victorias, San Francisco, Nuevo Tazumal y otros. Entre estos sitios se encuentra también el Parque Arqueológico Casa Blanca.
                </p>
                <p>
                    Chalchuapa fue una ciudad con su propia cultura y que amalgamo influencias de otros sitios relacionados a grupos Mayas, Teotihuacanos, Toltecas, etc. 
                    A través de sus siglos de ocupación continua. Comprende una serie de estructuras visibles de tipo monumental y espacios domésticos no visibles en superficie 
                    que fueron el escenario de un importante y sofisticado asentamiento que existió desde el Periodo Preclásico Temprano (1200 a.C.).
                </p>
                <P>
                    Chalchuapa en general es uno de los espacios de asentamiento prolongado más antiguo de El Salvador, es decir que, no fue interrumpido a través del tiempo con 
                    las ocupaciones para los Periodos Preclásico, Clásico, Postclásico, Conquista, Colonia y República.
                </P>
                <p>
                    Tazumal fue un asentamiento rector en su apogeo para el Periodo Clásico (200 a.C. al 900 d.C.).
                </p>
            </section>
            <br>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Casa Blanca</h4>
                    <img src="assets/Santa Ana/Casa-Blanca.jpg">
                </div>
                <p>
                    Casa Blanca tiene un área de 6 hectáreas, la cual representa un fragmento de un sitio mucho mayor, ahora en gran parte destruido debido al crecimiento de la ciudad de Chalchuapa.
                </p>
                <p>
                    Junto con la vecina zona de El Trapiche (fuera del parque), Casa Blanca llegó a ser el centro de un importante señorío maya temprano, de finales del periodo Preclásico tardío 
                    (aproximadamente entre 200 a.C. y 250 d.C.).
                </p>
                <p>
                    La estructura piramidal más grande conocida en El Salvador fue construida en el sector de El Trapiche, y frente a ella se han encontrado fragmentos de estela, 
                    esculturas de cabeza de jaguar entre otros elementos escultóricos. Otra estructura de esa época (investigada antes de su destrucción) contenía los restos de más 
                    de 30 personas, aparentemente sacrificados; es posible que hayan sido cautivos de una de las campañas de guerra conducidas por este antiguo reino. 
                </p>
                <p>
                    Al inicio del Período Clásico se trasladó el centro ceremonial principal desde las áreas de El Trapiche-Casa Blanca hacia lo que hoy se conoce como Tazumal, 
                    quedando abandonada el área de Casa Blanca. Al comenzar el Período Clásico Tardío Casa Blanca fue de nuevo utilizada bajo el control del centro ceremonial de Tazumal.
                </p>
                <p>
                    El sitio ha aportado evidencia de actividad humana que se remonta a más de 3,000 años desde el presente. Se trata del registro de polen en una pequeña laguneta de la zona 
                    que indica la destrucción del bosque primario seguido por el cultivo de maíz, señalando de forma dramática la introducción de agricultura intensiva en la región y el establecimiento 
                    de vida en aldeas que dieron pie a las civilizaciones mesoamericanas.  
                </p>
                <p>
                    Los hallazgos más tardíos en Casa Blanca son de entierros con ofrendas del periodo que cierra con la invasión de los españoles, el Posclásico.
                </p>
            </section>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Geografia</h3>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Lagos</h4>
                <div class="geografia">
                    <img src="assets/Santa Ana/Lago-Coatepeque.jpg" class="img-geo">
                    <p class="info-geo">
                        Lago de Coatepeque
                        <br>
                        Sus aguas azules y su alta oferta de ecoturismo hacen del lago de Coatepeque uno de los destinos preferidos por salvadoreños y extranjeros, perfecto para practicar: kayak, jet ski y buceo.
                        <br>
                        Este lago es de origen volcánico y por su abundante riqueza natural, puedes observar una gran variedad de aves residentes y migratorias, además, de realizar actividades como: 
                        pescar, bucear o dar en un paseo en kayak, jet ski o lancha y en sus alrededores, podrías hacer senderismo o bici montaña, logrando bellas vistas panorámicas llenas de vegetación.
                        <br>
                        Sus aguas cambian de color azul a verde turquesa, y según autoridades del Ministerio de Medio Ambiente y Recursos Naturales de El Salvador, este es un fenómeno cíclico que ocurre cada cierto tiempo. 
                        El cambio de color ha sucedido en 1998, 2006, 2012, 2016, 2017, 2018 y 2019; aunque durante este impactante y maravilloso capricho de la naturaleza, se recomienda no realizar ninguna actividad dentro del lago, 
                        su vista para una fotografía y un momento inolvidable será perfecto.
                    </p>
                </div>
            </section>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Volcanes</h4>
                <div class="geografia">
                    <img src="assets/Santa Ana/Ilamatepec-Volcan.jpg" class="img-geo">
                    <p class="info-geo">
                        Volcán de Santa Ana (Ilamatepec)
                        <br>
                        Pon a prueba tu resistencia alcanzando la cima del volcán Ilamatepec, también llamado volcán de Santa Ana. Si logras llegar a la parte más alta tendrás de las vistas más 
                        impresionantes de la zona, al fondo observarás las aguas turquesas del majestuoso lago de Coatepeque.
                        <br>
                        Ubicado en el departamento de Santa Ana, el coloso tiene una altitud de 2,381 metros sobre el nivel del mar, siendo el volcán más alto de El Salvador, registrando sus 
                        últimas erupciones en el 2,005.
                        <br>
                        Forma parte del Complejo Los Volcanes en la cordillera de Apaneca, dentro de un bosque nuboso montañoso tropical, en una región cafetalera a unos 65 kilómetros al oeste de la capital.
                        <br>
                        Las principales actividades de la región son la agricultura y el turismo, por ello no te arrepentirás de los paisajes que verás desde que vayas en la carretera, además, de los puestos 
                        de ventas de frutos que caracterizan a la zona.
                        <br>
                        Una vez comiences a subir el volcán, la experiencia con la flora y la fauna será increíble, brindándote además un clima fresco y delicioso.
                        <br>
                        El ascenso es de nivel medio (5/10), con un clima que varía. Entre las recomendaciones de los excursionistas están: la ropa cómoda, agua, gafas de sol, bloqueador, gorra o sombrero y 
                        calzado adecuado para montañismo o senderismo.
                        <br>
                        La entrada al Complejo es $1.50 para salvadoreños, los extranjeros pagan $3.
                        <br>
                        Menores de 6 años y mayores de 60 entran gratis.
                        <br>
                        Los horarios de atención son de 8:00 a.m. a 4:00 p.m.
                    </p>
                </div>
            </section>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Cerros</h4>
                <div class="geografia">
                    <img src="assets/Santa Ana/Cerro-Verde.jpg">
                    <p class="info-geo">
                        Parque Recerativo Cerro Verde
                        <br>
                        Cuntetepeque, es el nombre en náhuat del Cerro Verde y significa "Cerro de nubes o brumas". Se ubica en el departamento de Santa Ana, a 77 kilómetros de San Salvador, 
                        a una distancia aproximada de 1 hora y 40 minutos en automóvil desde El Salvador del Mundo.
                        <br>
                        Fue fundado por don Raúl Contreras y abierto al público en el año de 1955, formando parte del "Complejo Los Volcanes" y establecido como un área prioritaria para la 
                        conservación del medio ambiente en El Salvador.
                        <br>
                        El Cerro Verde cuenta con una extensión de 54 manzanas donde se ubican los senderos interpretativos: "Las Flores Misteriosas" y "Una ventana a la naturaleza"; 
                        atractivos turísticos que puedes disfrutar al visitar el lugar, además de apreciar la biodiversidad de flora y fauna.
                        <br>
                        También, encuentras el "Hotel de Montaña" administrado por Casa 1800.
                        <br>
                        Las caminatas a los volcanes de Izalco (con una altura de 1,980 msnm) y el volcán de Santa Ana conocido como Ilamatepec (que tiene una altura de 2,381 msnm), 
                        son opciones turísticas que llaman la atención de los más intrépidos y amantes de las experiencias al aire libre, que disfrutan poner a prueba sus habilidades físicas.
                        <br>
                        Además, el Cerro Verde cuenta con miradores, áreas de juegos recreativos, abundante flora y fauna, modernos servicios sanitarios, estacionamiento, cafeterías, restaurante, 
                        entre otros atractivos de los cuales disfrutarás.
                        <br>
                        El Instituto Salvadoreño de Turismo, ha trabajado junto a los guías turísticos locales para brindar a los visitantes extranjeros y nacionales, una interpretación del reino 
                        natural en una forma educativa y diferente.
                    </p>
                </div>
            </section>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Personajes Célebres</h3>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Tomás Regalado</h4>
                <div class="personajes row">
                    <img src="assets/Santa Ana/Toma-Regalado.jpg" class="img-persona">
                </div>
                <p>
                    Nació el 7 de noviembre de 1861 en Santa Ana y murió como un héroe en la batalla del jícaro en Guatemala, 
                    el 11 de julio de 1906. Fue un militar político salvadoreño, presidente se su país (1898-1903). Regalado 
                    fue uno de los conspiradores que el 29 de abril de 1894 participo en el derrocamiento del gobierno de Carlos Ezeta, 
                    dentro del movimiento llamado de "los 44".
                </p>
            </section>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Pedro José Escalón</h4>
                <div class="personajes row">
                    <img src="assets/Santa Ana/Pedro-Jose-Escalon.jpg" class="img-persona">
                </div>
                <p>
                    Nació en Santa Ana el 25 de marzo de 1847 y murió el 6 de septiembre de 1923. Fue un político salvadoreño, 
                    presidente de la república (1903-1907). Durante su gobierno se creó la escuela de comercio y hacienda anexa al 
                    instituto nacional central en diciembre de 1906 y se inició la construcción del palacio y el teatro nacionales de San Salvador.
                </p>
            </section>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">David Granadino</h4>
                <div class="personajes row">
                    <img src="assets/Santa Ana/David-Granadino.png" class="img-persona">
                </div>
                <p>
                    Uno de los músicos más prominentes de El Salvador, nación en Santa Ana el 13 de junio de 1876. Hijo de 
                    Don Joaquín Chávez y Doña Simona Granadino. Compuso su primer vals conocido como "El Piruli", su composición 
                    musical más famosa fue: El vals "Bajo el Almendro", conocido como un himno de la ciudad Morena. El renombrado maestro murió en su 
                    tierra querida el 22 de agosto de 1933, a la edad de 57 años. En el parque la libertad se encuentra un monumento al notable compositor.
                </p>
            </section>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">David Escobar Galindo</h4>
                <div class="personajes row">
                    <img src="assets/Santa Ana/David-Escobar-1.webp" class="img-persona">
                    <img src="assets/Santa Ana/David-Escobar-2.webp" class="img-persona">
                    <img src="assets/Santa Ana/David-Escobar-3.jpg" class="img-persona">
                </div>
                <p>
                    Nació en Santa Ana en 1943. Es uno de los poetas más lúcidos y discutidos de la actualidad. Su poesía es vigorosa, vital y rica en contenidos humanos.
                </p>
                <p>
                    Fue condecorado por el Gobierno de Francia con el premio "Caballero en la Orden de las Artes y las Letras" en 1989.
                </p>
                <p>
                    Algunas de sus obras son "El bronce y la esperanza", "La estación luminosa", "Historias sin cuento", "Una grieta en el agua" (novela) y 
                    "Prueba de fuego", así como muchas fábulas.
                </p>
            </section>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Miguel Ángel Espino</h4>
                <div class="personajes row">
                    <img src="assets/Santa Ana/Miguel-Angel-Espino.jpg" class="img-persona">
                </div>
                <p>
                    Nació en Santa Ana en 1902 y murió en 1965. Es uno de los escritores más reconocidos del país. Cultivó la prosa lírica y el género periodístico.
                </p>
                <p>
                    Siendo aún muy joven publica "Mitología de Cuscatlán", recreación poética de mitos y leyendas pipiles en la que aboga por el arte indígena. 
                    Otras de sus obras son "Trenes", "Hombres contra la muerte" y "Como cantan allá".
                </p>
            </section>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Álvaro Menéndez Leal</h4>
                <div class="personajes row">
                    <img src="assets/Santa Ana/Alvaro-Menendez-1.jpg" class="img-persona">
                    <img src="assets/Santa Ana/Alvaro-Menendez-2.webp" class="img-persona">
                    <img src="assets/Santa Ana/Alvaro-Menendez-3.jpg" class="img-persona">
                </div>
                <p>
                    Nació en Santa Ana en 1931. Formó parte de la "Generación comprometida" en 1950.
                </p>
                <p>
                    Obtuvo el primer premio hispanoamericano en la rama de teatro con "Luz negra".
                </p>
                <p>
                    Sus obras son "Cuentos breves y maravillosos", "Una cuerda de nylon y oro", "Teatro inútil" y "Es lícito matar al tirano".
                </p>
            </section>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Serafin Quiteño</h4>
                <div class="personajes row">
                    <img src="assets/Santa Ana/Serafin-Quiteño-1.jpg" class="img-persona">
                    <img src="assets/Santa Ana/Serafin-Quiteño-2.webp" class="img-persona">
                    <img src="assets/Santa Ana/Serafin-Quiteño-3.jpg" class="img-persona">
                </div>
                <p>
                    Serafín Quiteño nació en la "Ciudad Morena" en 1906. Fue poeta y periodista. En El Diario de Hoy mantuvo una columna titulada 
                    "Ventana de colores", usando el seudónimo de Pedro C. Maravilla. Entre sus obras están "Corasón con s" y "Tórrido sueño". Murió en 1987.
                </p>
            </section>
        </article>
    </main>

  `,
})
export class SantaAnaComponent {

}
