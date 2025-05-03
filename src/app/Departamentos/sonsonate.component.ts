import { Component } from '@angular/core';

@Component({
  selector: 'app-sosonate',
  standalone: true,
  imports: [],
  template: `
    <main>
        <h2 id="nombreDept" class="pacific-cyan">Sonsonate</h2>
        
        <article><!--Información general y municipios-->
            <img src="assets/departamentos/sonso54.png" id="imgDept">
            <p>Sonsonate es uno de los destinos para hacer turismo religioso, por su solemnidad y fervor durante la Semana Santa. 
                Su importancia cultural es tal que en 2013 la Asamblea Legislativa declaró la Semana Santa Sonsonateca como parte del 
                Patrimonio Cultural Religioso del país.</p>
            <p>También puedes visitar la Catedral Santísima Trinidad de Sonsonate, reconocida por la concurrencia de feligreses que 
                coinciden desde ese punto hacia procesiones del Nazareno y el Santo Entierro durante Semana Santa.</p>
            <p>En este destino no puedes dejar de visitar la Plaza Ferroviaria, lugar donde conocerás sobre la importancia que tuvo el 
                ferrocarril, como medio de transporte, en esa ciudad.</p>
            <p>Sonsonate es un municipio que, por su cercanía hacia otros referentes turísticos como el volcán de Izalco y playas de arenas 
                doradas, es ideal para pernoctar y permanecer un par de días para recorrer el occidente de El Salvador.</p>
            <p>Si deseas disfrutar de un buen café, en la zona podrás encontrar comercios, restaurantes y bares en los que podrás encontrar 
                variedad de gastronomía y bebidas.</p>
            <h4>Municipios:</h4>
            <ol class="row">
                <div class="col-sm-3">
                    <li>Sonsonate (cuidad cabecera)</li>
                    <li>Acajutla (principal puesto del país)</li>
                    <li>Armenia</li>
                    <li>Caluco</li>
                    <li>Cuisnahuat</li>
                    <li>Izalco</li>
                    <li>Juayúa</li>
                </div>
                <div class="col-sm-3">
                    <li>Nahuizalco</li>
                    <li>Nahulingo</li>
                    <li>Salcoatitán</li>
                    <li>San Antonio del Monte</li>
                    <li>San Julián</li>
                    <li>Santa Catarina Masahuat</li>
                    <li>Santa Isabel Ishuatán</li>
                </div>
                <div class="col-sm-3">
                    <li>Santo Domingo de Gúzman</li>
                    <li>Sonzacate</li>
                </div>
            </ol>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Centros turísticos</h3>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Nahuizalco</h4>
                    <img src="assets/Sonsonate/Nahuizalco.jpg">
                </div>
                <p>¡Nahuizalco, destino de historia y artesanías!
                    <br>
                    Uno de los atractivos más frecuentados en Nahuizalco es el Museo Conmemorativo Náhuatl Pipil, que reúne información 
                    sobre los asentamientos indígenas, la historia y detalles de la masacre de 1932, acontecimiento que marcó a El Salvador.</p>
                
                <p>La identidad cultural, caracteriza a los pobladores de Nahuizalco, en la actualidad aún es posible ver personas con sus trajes indígenas.</p>
                
                <p>La gastronomía es otro atractivo del lugar, si lo visitas deberás probar los canchules: tamales tradicionales de las 
                    festividades del Día de los Santos Difuntos. Otras de las delicias que debes tomar en cuenta a la hora de degustar la comida 
                    del lugar son las pupusas de yuca y la yuca salcochada con chicharrón.</p>
                
                <p>En Nahuizalco también podrás recorrer las tiendas y los talleres donde se elaboran y comercializan las artesanías y los muebles característicos del lugar.</p>

                <p>Hacer una caminata a la cascada La Golondrinera, una caída de agua de más de 40 metros de altura; visitar el mercado nocturno e ir a la iglesia de San 
                    Juan Bautista, construida en el siglo XVIII, son otras actividades que puedes realizar.</p>
            </section>
            <br>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Acajutla</h4>
                    <img src="assets/Sonsonate/Acajutla.jpg">
                </div>
                <p>Acajutla es un activo municipio, y el principal Puerto marítimo industrial de El Salvador. Está ubicado en el departamento occidental de Sonsonate.</p>

                <p>La playa de Acajutla está situada junto a la bulliciosa zona urbana de esta ciudad Puerto, pero en cuanto a la práctica del surf, se deben mencionar 
                    otras playas y sitios cercanos.</p>

                <p>Un hecho destacado es que esta parte de la costa salvadoreña mira al este, no al sur como la mayoría de playas del país; esto determina que esta 
                    zona no se vea tan expuesta a las marejadas que golpean desde el océano pacífico sur. Por lo tanto, los oleajes en Acajutla no son tan poderosos o grandes, 
                    aunque no hay que confiarse, pues cada localidad tiene lo suyo. Incluso se puede asegurar que en esta región todavía hay olas por descubrir.</p>

                <p>Contiguo al muelle industrial, en dirección al oriente, se encuentra playa Las Flores, una ola mansa y amable, de rompiente derecha, que ha resultado un 
                    verdadero imán para los amantes del SUP surf y tabla larga. Es importante señalar que solo funciona en marea alta, ya que su fondo rocoso se ve expuesto 
                    peligrosamente en mareas baja y media.</p>

                <p>Inmediatamente después de Las Flores, siempre al oriente, se encuentra Punta Negra o Negrei, como le llaman los locales. Tiene la particularidad de ser 
                    la única punta de olas izquierdas en El Salvador. Su ola puede llegar a ser poderosa y gratificante. Funciona en todas las mareas, pero en el tope de 
                    marea baja, tiende a cerrarse.</p>

                <p>Hacia el occidente del muelle industrial de Acajutla también existen playas donde se puede practicar el surf, aunque son más adecuadas para hacer body surf.</p>

                <p>La Bocana es un "beach break" o rompiente de playa, ubicado al costado occidental del muelle artesanal de Acajutla. Por lo tanto rompe hacia la izquierda y 
                    derecha, y sus características son rapidez, línea corta, tubular y cierres abruptos.</p>

                <p>En días de fuertes marejadas, el muelle artesanal produce una ola izquierda larga, lenta y amable, idónea para correrla en una tabla larga o en un SUP; si 
                    bien hay que evitar conectar con el "beach break" para evitar un cierre peligroso.</p>

                <p>Luego de La Bocana está playa La Pilsener, otro "beach break" o rompiente de playa, menos tubular, pero siempre rápida y empinada. Solo rompe en mareas medias.</p>

                <p>Por ser una ciudad portuaria, la zona general de Acajutla tiene un buen nivel de desarrollo, y, por ende, muchos servicios para el visitante. 
                    Hay numerosos hoteles, algunos de playa, casas para rentar; así como restaurantes, bares y otras atracciones. También existe buena conectividad.</p>

                <p>Para llegar a Acajutla desde San Salvador, toma la carretera Panamericana y luego la carretera hacia Sonsonate. Antes de entrar a esta ciudad, toma la carretera 
                    hacia Acajutla y continúa hasta que la señalización te indique que has llegado.</p>
            </section>
            <br>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Los Cóbanos</h4>
                    <img src="assets/Sonsonate/Los-Cobanos.jpg">
                </div>
                <p>Los Cóbanos es una pequeña comunidad de pescadores en la costa del occidental departamento de Sonsonate, ubicada a 11 kilómetros al oriente del 
                    municipio y Puerto de Acajutla.</p>

                <p>En sus alrededores hay varias playas paradisiacas, que por sus arenas color miel, su composición coralina, agua mansa, y las formaciones 
                    rocosas que sobresalen en toda la costa, constituyen un lugar verdaderamente único en El Salvador.</p>

                <p>El área general de Los Cóbanos es una zona de 264 kilómetros cuadrados de ecosistema marino bajo protección ambiental, debido a su riqueza 
                    y diversidad natural.</p>

                <p>La práctica del surf no ha sido muy popular en este lugar, debido a que el arrecife circundante forma una especie de rompeolas, que crea 
                    una amplia zona de agua confinada. Sin embargo, hay lugares como la cercana playa Salinitas, donde se forman canales entre los arrecifes, 
                    que crean olas pequeñas pero consistentes, ideales para práctica del SUP surf, o para hacer remo en tabla.</p>

                <p>Menos conocidas son algunas formaciones rocosas, a unos 800 metros de la orilla, que en días de grandes marejadas producen olas del tipo 
                    conocido como "outer reef", y que pueden llegar a medir hasta 10 pies de altura (3.5 metros), y que desaparecen al encontrar agua más profunda, 
                    tras correr unos 200 metros. A estos lugares se puede solo acceder en lancha y bajo la orientación de una guía local.</p>

                <p>Entre noviembre y febrero la zona es ideal para practicar el buceo con tanque, ya que existen decenas de arrecifes volcánicos y algunos naufragios, 
                    cuya vida marina y formaciones resultan alucinantes. También hay zonas costeras, propias para hacer snorkel y canotaje.</p>

                <p>Esta zona es famosa por la pesca en aguas azules, pues a pocos kilómetros de la costa existen profundas fosas marinas, donde se refugian y se alimentan 
                    codiciadas especies como el pez dorado, el pez vela, wahoos, atunes y marlins. Los lancheros locales ofrecen sus embarcaciones, equipo y experiencia, 
                    para organizar un día de pesca que puede resultar inolvidable.</p>

                <p>Una atractivo especial es que en Los Cóbanos son comunes los avistamientos de ballenas, especialmente de la especie yubarta o jorobada. Estudios 
                    científicos han establecido que esta es una zona rica en nutrientes, que atraen a estos enormes mamíferos, que se alimentan y descansan en sus aguas 
                    durante los meses de enero y febrero, antes de proseguir con la migración que les lleva desde Alaska hasta Ecuador. Los lugareños ofrecen tours para 
                    disfrutar de este espectáculo único.</p>

                <p>Este destino turístico ha tenido enorme auge y desarrollo, por lo que cada vez existe una mayor oferta en alojamientos, alimentación y otros servicios.</p>
                
                <p>Para llegar a Los Cóbanos desde San Salvador, debe tomar la Carretera Panamericana en dirección a Sonsonate, luego desviarse hacia Acajutla, pasando 
                    por el desvío Kilo 5; a 3 kilómetros encontrarás el desvío hacia Los Cóbanos, que se encuentra a 7 kilómetros de distancia.</p>
            </section>
            <br>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Salinitas</h4>
                    <img src="assets/Sonsonate/Salinitas.jpg">
                </div>
                <p>Arena grisácea, áreas rocosas y arrecifes hacen a esta playa una de las más destacadas de la zona occidental del país. Si bien, su actividad principal 
                    es el buceo o esnórquel, pueden realizarse otro tipo de actividades tales como kayak, viajes en lancha, disfrutar de un bronceado en su cálida arena, 
                    un baño en sus aguas cristalinas y la pesca.</p>

                <p>Esta playa es el hogar una gran diversidad de especies marinas, entre ellas: barracudas, rayas, mero, pulpos, langostas, pez ángel y pez loro, entre 
                    otros y además se pueden apreciar en la distancia los barcos de vapor y vela que son parte de esta playa desde 1800.</p>
            </section>
            <br>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Metalío</h4>
                    <img src="assets/Sonsonate/Metalio.jpg">
                </div>
                <p>Una de las playas más visitadas en la zona por su vista espectacular hacia el mar y su amplia vegetación es Metalío. Su cercanía con el Puerto de 
                    Acajutla hace que este destino tenga una gran variedad de ofertas de servicios turísticos.</p>

                <p>Es una playa con pocas piedras por lo que es el escenario perfecto para una caminata sobre suave arena, además, su oleaje es muy calmado lo que 
                    hace que esta playa sea poco peligrosa e ideal para un paseo en familia o amigos.</p>

                <p>Lanchas a la orilla de la playa que te ofrecen un paseo por sus calmadas aguas, palmeras por doquier e indescriptibles paisajes, con el 
                    complemento perfecto para un reparador descanso que harán de tu visita una experiencia única en la zona occidental de El Salvador.</p>

                <p>La excelente ubicación de esta playa permite encontrar en la zona diversos restaurantes para todo tipo de presupuestos, además de diferentes 
                    opciones de alojamiento o para acampar en las zonas destinadas para esta actividad.</p>
            </section>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Geografia</h3>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Volcanes</h4>
                <div class="geografia">
                    <img src="assets/Sonsonate/Volcan-Izalco.jpg" class="img-geo">
                    <p class="info-geo">
                        Volcán de Izalco
                        <br>
                        Acércate a conocer el volcán más joven de El Salvador y del mundo, el cual se mantiene activo y representa todo un reto para los turistas.
                        <br>
                        Su nombre en náhuat significa: lugar de las arenas negras, las cuales lo caracterizan hasta la fecha. Es conocido también como Faro del 
                        Pacífico, debido a que con este coloso natural se orientaban los barcos, gracias a sus constantes erupciones y a sus flujos de lava.
                        <br>
                        Este volcán continúa su actividad y tiene una altura de 1,950 metros sobre el nivel del mar, y un ángulo de inclinación alrededor de 45º, 
                        mostrándose imponente en medio de la vegetación espesa de la zona.
                        <br>
                        El ascenso es de nivel medio (6/10), con un clima que varía desde las más altas hasta las más bajas temperaturas, por ello, se recomienda 
                        llevar ropa cómoda, 1.5 litros de agua, gafas de sol, bloqueador, gorra y calzado adecuado al terreno escabroso.
                    </p>
                </div>
            </section>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Ríos</h4>
                <div class="geografia">
                    <img src="assets/Sonsonate/Rio-sensunapan.jpg" class="img-geo">
                    <p class="info-geo">
                        Río Sensunapan (Río grande de Sonsonate)
                        <br>
                        El río Sensunapán es un río de 16 kilómetros de largo que se encuentra en el departamento de Sonsonate, El Salvador. Su nombre proviene del 
                        náhuatl y significa "Río de las muchas aguas" o "Río grande". También llamado el Río Grande de Sonsonate es uno de los ríos más importantes 
                        de la zona, junto con el río Bandera. Este río atraviesa la llanura de Sonsonate de norte a sur y desemboca en el océano Pacífico.
                    </p>
                </div>
            <br>
                <div class="geografia">
                    <p class="info-geo">
                        Río Paz
                        <br>
                        El río Paz nace en las montañas de Quezada (cerca del volcán Amayo), al noroeste del departamento de Jutiapa. El río sirve como 
                        frontera natural que marca la división natural entre Guatemala y El Salvador a lo largo de una gran parte de su curso.
                        <br>
                        Tiene constituido actualmente un recorrido de 134 km y sirve de línea divisoria entre Guatemala y El Salvador desde su 
                        confluencia con el río Chalchuapa hasta su desembocadura en el océano Pacífico a 16 km al sudoeste del municipio de San 
                        Francisco Menéndez, en el departamento de Ahuachapán. La cuenca del río Paz tiene una superficie de 1732 km² en Guatemala 
                        y 929 km² en El Salvador la profundidad del río Paz es de siete metros.
                    </p>
                    <img src="assets/Sonsonate/Rio-paz.jpg" class="img-geo">
                </div>
            </section>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Cerros</h4>
                <div class="geografia">
                    <img src="assets/Sonsonate/Cerro-Aguila.jpg" class="img-geo">
                    <p class="info-geo">
                        Cerro El Águila
                        <br>
                        El Cerro El Águila es una destacada montaña ubicada en la localidad de Los Naranjos, cerca de Juayúa, en El Salvador. 
                        Esta montaña es conocida por ofrecer a los visitantes una experiencia única en la naturaleza, con su variedad de terrenos, 
                        clima agradable y diversidad de bosques.
                        <br>
                        El terreno en el Cerro El Águila es principalmente montañoso y boscoso, lo que lo convierte en un lugar ideal para 
                        caminatas y senderismo. Las rutas de senderismo varían en dificultad, desde senderos suaves y bien marcados hasta caminos 
                        más desafiantes que requieren un mayor nivel de habilidad.
                        <br>
                        El clima en el Cerro El Águila es típicamente fresco y templado debido a su elevación. Se caracteriza por temperaturas 
                        agradables durante todo el año, con días cálidos y noches más frescas. Es importante llevar ropa adecuada para climas montañosos, 
                        ya que las temperaturas pueden descender significativamente.
                        <br>
                        La montaña alberga una variedad de ecosistemas boscosos, desde bosques nubosos hasta bosques de coníferas y vegetación 
                        subtropical. Los visitantes pueden disfrutar de la exuberante vegetación, que incluye una gran variedad de árboles, plantas y flores. 
                        Además, el bosque es el hogar de una diversidad de fauna, como aves, mamíferos y reptiles.
                        <br>
                        La altura máxima 2035 msnm, se encuentra en una elevación considerable, lo que proporciona vistas impresionantes de los alrededores 
                        y una sensación de estar en la cima del mundo.
                    </p>
                </div>
            </section>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Personajes Célebres</h3>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Salvador Salazar Arrué (Salarrué)</h4>
                <div class="personajes row">
                    <img src="assets/Sonsonate/Salarrue-1.jpg" class="img-persona">
                    <img src="assets/Sonsonate/Salarrue-2.jpg" class="img-persona">
                    <img src="assets/Sonsonate/Salarrue-3.webp" class="img-persona">
                </div>
                <p>
                    Más conocido por su seudónimo "Salarrué". Nació en Sonsonate, el 22 de octubre de 1899, y murió en San Salvador el 27 de noviembre de 1975. 
                    Poeta, pintor y escritor, ha sido considerado el máximo exponente de la narrativa cuzcatleca.
                </p>

                <p>Salarrué fue uno de los fundadores de la nueva corriente narrativa latinoamericana. En sus "Cuentos de Barro" y "Cuentos de Cipotes", 
                    logra una plena identificación con el mundo campesino, nunca advertidas en los autores salvadoreños.</p>
            </section>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Rafael Campos</h4>
                <div class="personajes row">
                    <img src="assets/Sonsonate/Rafael-Campos.jpg" class="img-persona">
                </div>
                <p>
                    Nació en Sonsonate el 24 de octubre de 1813, y murió en el Puerto de Acajutla el 1 de marzo de 1890. Presidente de la República de 
                    El Salvador del 12 de febrero al 12 de mayo de 1856 y del 19 de julio de 1856 al 1 de febrero de 1858.
                </p>

                <p>El partido Republicano postuló a don Rafael Campo (aún contra su voluntad) como presidente de El Salvador.</p>
            </section>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Oscar Osorio</h4>
                <div class="personajes row">
                    <img src="assets/Sonsonate/Oscar-1.jpg" class="img-persona">
                    <img src="assets/Sonsonate/Oscar-2.jpg" class="img-persona">
                </div>
                <p>
                    El teniente coronel Óscar Osorio, nació en la Ciudad de Sonsonate, el 14 de diciembre de 1910.
                </p>

                <p>La educación primaria la realizó en Sonsonate, Santa Ana y San Salvador, y la profesional en la 
                    Escuela Militar Capitán General Gerardo Barrios de esta capital.</p>

                <p>Hizo sus estudios superiores en varias Academias Nacionales y Extranjeras, pero principalmente 
                    3 años en la Escuela de Guerra de Turín, Italia, de donde regresó al país en octubre de 1943.</p>

                <p>Participó en el movimiento revolucionario que derrocó al presidente Maximiliano Hernández Martínez 
                    (1931-1944); fue desterrado y se desempeñó como vicecónsul en México (1947).</p>
            </section>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Pancho Lara</h4>
                <div class="personajes row">
                    <img src="assets/Sonsonate/Pancho-Lara.webp" class="img-persona">
                </div>
                <p>
                    El 3 de diciembre de 1900, marcó el inicio de la vida de uno de los cantautores salvadoreños más importantes de El Salvador.
                </p>

                <p>Su nombre Francisco Antonio Lara Hernández, conocido artísticamente como Pancho Lara, nació en la hacienda "La Presa" 
                    jurisdicción de Santa Ana. Posteriormente, fue asentado en la ciudad de Armenia, Sonsonate.</p>

                <p>Sus padres: Capitán Jeremías Lara originario de Santa Ana y Ángela Hernández de Lara, oriunda de San Vicente. 
                    Fue el menor de 7 hermanos: Raúl, Humberto, Héctor, Rafael, Ofelia y Atilo.</p>

                <p>A los cinco años se trasladó con sus padres a San Salvador y estudió hasta tercer grado en la Escuela Dr. José Matías Delgado, 
                    de la que tuvo que retirarse a causa de las dificultades económicas que atravesaban sus padres. Más tarde, cuando decidieron ponerlo 
                    a aprender un oficio, su hermano mayor, que era violinista, dispuso que fuera sastre para que le arreglara los trajes que usaba en sus 
                    presentaciones artísticas. Durante varios años sirvió como aprendiz de un maestro de sastrería y cuando hubo aprendido los secretos del 
                    oficio estableció su propio taller.</p>

                <p>Desde la edad de quince años, comenzó Pancho a componer pequeñas estrofas de canciones infantiles, ayudado por su adorada madre a quien los vecinos, 
                    por su belleza, llamaban "florecita"; y apoyado en libros aprendió solfa, desarrollando su habilidad para tocar guitarra, marimba, piano y otros 
                    instrumentos de forma autodidacta.</p>
            </section>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Margarita del Carmen Brannon Vega (Claudia Lars)</h4>
                <div class="personajes row">
                    <img src="assets/Sonsonate/Claudia-Lars-1.jpg" class="img-persona">
                    <img src="assets/Sonsonate/Claudia-Lars-2.webp" class="img-persona">
                    <img src="assets/Sonsonate/Claudia-Lars-3.jpg" class="img-persona">
                </div>
                <p>
                    Conocida por su seudónimo Claudia Lars (Armenia, Sonsonate el 20 de diciembre de 1899 y murió en San Salvador el 22 de julio de 1974). 
                    Poetisa salvadoreña, una de las voces más sobresalientes de la lírica centroamericana del siglo XX.
                </p>

                <p>Hija de Peter Patrick Brannon, ingeniero norteamericano, y de la salvadoreña Carmen Vega Zelayandía, estudió en el colegio La Asunción de la ciudad 
                    de Santa Ana, donde la joven Claudia se decantó por los estudios humanísticos. Religión y poesía se vincularon en su hogar para acrecentar su sensibilidad natural. 
                    Desde muy pronto recibió la influencia de los clásicos antiguos y españoles (Góngora, Quevedo, Fray Luis de León), así como la de los románticos ingleses y de Rubén Darío. 
                    También coincidió con algunos de sus contemporáneos, como el cuentista salvadoreño Salarrué.</p>

                <p>Poetisa precoz, con diecisiete años publicó un breve poemario que pasó inadvertido: Tristes mirajes, que vio la luz gracias al mecenazgo del general y 
                    poeta Juan José Cañas, uno de sus primeros mentores.</p>

                <p>Por esa época Claudia Lars mantenía relaciones sentimentales con el poeta Salomón de la Selva. Pero en 1919, cuando habían ya formalizado su compromiso de matrimonio, 
                    el padre de Claudia decidió romper el vínculo y enviar a su hija a los Estados Unidos, a casa de unos familiares afincados en Pennsylvania. Allí conoció a Leroy Beers, 
                    con quien contrajo matrimonio tras un breve período de noviazgo.</p>

                <p>Sin abandonar el país norteamericano, la poetisa se instaló en compañía de su nuevo esposo en el barrio de Brooklyn de Nueva York, donde ejerció como profesora de lengua 
                    castellana en la Escuela Berlitz. En 1927 tuvo ocasión de regresar a su país junto con su cónyuge, que acababa de ser nombrado cónsul de los Estados Unidos en El Salvador. 
                    Aposentados en la capital salvadoreña, a finales de 1927 nació su primer hijo, Leroy Beers Brannon, que sería el único vástago de Claudia Lars.</p>

                <p>Claudia Lars volvió a frecuentar los cenáculos literarios, en especial el congregado alrededor del poeta Alberto Guerra Trigueros, compuesto por escritores como Alberto 
                    Masferrer, Salarrué y Serafín Quiteño. En ese nuevo ambiente la poesía de Claudia Lars fluyó de nuevo con espontaneidad y soltura, lo que se tradujo en 1934 en una nueva 
                    entrega lírica: Estrellas en el pozo, publicada en las famosas Ediciones Convivio por voluntad expresa de su director, el intelectual costarricense Joaquín García Monge.</p>

                <p>Esta obra, bien recibida por críticos y lectores, allanó el camino del siguiente poemario de Claudia Lars, Canción redonda (1936), al que siguió, tras un paréntesis, 
                    La casa de vidrio (1942). En este fértil periodo publicó también Romances de norte y sur (1946), Sonetos (1947) y Ciudad bajo mi voz, libro premiado en el Certamen 
                    Conmemorativo del IV Centenario del Título de Ciudad de San Salvador.</p>
            </section>
        </article>
    </main>
  `,
})
export class SonsonateComponent {
                                    
}
