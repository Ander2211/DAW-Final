import { Component } from '@angular/core';

@Component({
  selector: 'app-ahuachapan',
  standalone: true,
  imports: [],
  template: `
  <main>
        <h2 id="nombreDept" class="pacific-cyan">Ahuachapán</h2>
        
        <article><!--Información general y municipios-->            <img src="assets/departamentos/ahua.png" id="imgDept">
            <p>Ahuachapán, ubicado en el occidente de El Salvador, posee destinos únicos donde podrás disfrutar desde un café de altura, 
                hasta conocer de sus tradiciones.</p>

            <p>Uno de los principales atractivos es la Parroquia de La Asunción, considerada una joya arquitectónica, por su edificación 
                de estilo colonial con más de 100 años de antigüedad. Cada año, en honor a su santa patrona se celebra el Día de los Farolitos, 
                antesala a la Natividad de la Virgen María, donde sus principales calles y otros municipios aledaños son decorados con farolitos 
                hechos artesanalmente.</p>

            <p>También podrás recorrer el Pasaje La Concordia, un área peatonal que posee coloridos murales, sitios emblemáticos y llenos de historia 
                como el monumento a la familia en el parque La Concordia y en el Parque Francisco Menéndez se encuentra el monumento al General Francisco 
                Morazán, quien fue Presidente de la República de El Salvador.</p>

            <p>Si quieres vivir una experiencia en el occidente de El Salvador y descubrir la riqueza de destinos turísticos que existen aledaños a 
                Ahuachapán, visita este destino que te sorprenderá.</p>
            <h4>Municipios:</h4>
            <ol class="row">
                <div class="col-sm-3">
                    <li>Ahuachapán (ciudad cabecera)</li>
                    <li>Apaneca</li>
                    <li>Atiquizaya</li>
                    <li>Concepción de Ataco</li>
                    <li>El Refugio</li>
                    <li>Guaymango</li>
                    <li>Jujutla</li>
                </div>
                <div class="col-sm-3">
                    <li>San Francisco Menéndez</li>
                    <li>San Lorenzo</li>
                    <li>San Pedro Puxtla</li>
                    <li>Tacuba</li>
                    <li>Turín</li>
                </div>
            </ol>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Centros turísticos</h3>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Termales de Santa Teresa</h4>                    <img src="assets/Ahuachapan/Termales-Santa-Teresa.jpg">
                </div>
                <p>Termales Santa Teresa es un Hotel & Natural Spaubicado en Ahuachapán con 30 piscinas termales y 4 restaurantes para relajarte, 
                    ofrece masajes relajantes y baños de caolinita para brindar vitalidad y rejuvenecer.</p>
            </section>
            <br>
            <section>
                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Termales Alicante</h4>                    <img src="assets/Ahuachapan/Termales-Alicante.jpg">
                </div>
                <p>Este destino natural cuenta con catorce piscinas termalesde diferentes tamaños.</p>
                
                <p>En este lugar, por su gran riqueza natural, podrás realizar caminatas hacia fuentes 
                    termales y disfrutar de sus maravillosos paisajes.</p>

                <p>Si lo que buscas es un lugar para relajarte y descansar, en este lugar podrás 
                    conseguirlo haciendo contacto con la naturaleza y disfrutando de sus aguas termales.</p>
            </section>
            <br>
            <section>                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Apaneca</h4>
                    <img src="assets/Ahuachapan/Apaneca.jpg">
                </div>
                <p>¡Bienvenidos a uno de los destinos con el clima más fresco de El Salvador!
                    <br>
                    El clima frío de Apaneca se compensa con una taza de café de la más alta 
                    calidad, cosechado en la zona.
                </p>

                <p>Apaneca es uno de los destinos que conforman la Ruta de Las Flores, 
                    se encuentra en el departamento de Ahuachapán a 1,477 metros sobre el nivel 
                    del mar, un lugar ideal para los amantes del clima fresco.</p>

                <p>Si el ecoturismo es lo tuyo, Apaneca cuenta con destinos como la Laguna Verde 
                    y la Laguna Las Ninfas, ambas son ideales para hacer senderismo y la exploración 
                    de la flora y la fauna de la zona.</p>

                <p>En los destinos también podrás hacer canopy, bicimontaña y paseos en buggies, 
                    ya que la zona cuenta con varios destinos que te invitan a poner a prueba tus habilidades.</p>
                
                <p>La zona también cuenta con lugares curiosos y místicos como el Laberinto de Albania, 
                    un enorme laberinto ecológico que te reta encontrar la salida; y el Hoyo de Cuajusto, un 
                    cráter volcánico extinto que conserva algunas cuevas.</p>

                <p>Por el alojamiento no te preocupes, en la zona existe un acogedor hostal a un precio accesible, 
                    también podrás elegir entre cabañas u hoteles más rústicos.</p>

                <p>Las coloridas casas y las ventas de artesanías te motivarán a hacer un recorrido por 
                    las calles empedradas. En el centro de la ciudad podrás degustar de la gastronomía local como 
                    sopa de gallina india, gallina asada, quesadillas y más.</p>

                <p>En cuanto a gastronomía, tanto en el casco urbano como en los destinos aledaños hallarás 
                    una rica oferta de comida tradicional.
                    <br>
                    Definitivamente, Apaneca es un lugar que debes visitar.
                </p>
            </section>
            <br>
            <section>                <div class="turismo">
                    <h4 class="titulo-n3 vivid-sky-blue">Concepción de Ataco</h4>
                    <img src="assets/Ahuachapan/Ciudad-de-Ataco.jpg">
                </div>
                <p>¡Uno de los destinos más coloridos de El Salvador te espera!
                    <br>
                    Con sus calles empedradas, coloridos murales, artesanías, 
                    gastronomía y un clima fresco, así es Ataco, otro destino 
                    de la Ruta de Las Flores.
                </p>

                <p>A 1,260 metros sobre el nivel del mar, rodeado de imponentes 
                    cerros llenos de vegetación y prominentes cafetales, en 
                    Ataco podrás disfrutar una mayor experiencia de ecoturismo, 
                    pues cuenta con espectaculares jardines, piscinas de aguas 
                    termales y cascadas.</p>
                
                <p>Si eres amante del café, seguro te gustará el Tour de Café, 
                    actividad que puedes realizar en las fincas aledañas. 
                    También puedes visitar los telares artesanales, ir al 
                    mirador del cerro de La Cruz, visitar los talleres de 
                    artes plásticas, recorrer sus calles para observar los 
                    coloridos murales y visitar la iglesia.</p>
                
                <p>En la ciudad degustarás de la comida gurmé y típica en 
                    los festivales gastronómicos, especialmente los fines 
                    de semana. Aunque no importa el día que decidas ir, pues 
                    en el parque central siempre encontrarás ventas y restaurantes, 
                    en los alrededores.</p>

                <p>Una de sus tradiciones más relevantes es la celebración 
                    del Día de los Farolitos, que ha permanecido viva por más 
                    de 200 años. Cada 7 de septiembre las calles se iluminan para 
                    celebrar la víspera del nacimiento de la Virgen María.</p>
            </section>
            <br>
            <section>
                <div class="turismo">                    <h4 class="titulo-n3 vivid-sky-blue">Parque Nacional El Imposible</h4>
                    <img src="assets/Ahuachapan/El-Imposible.jpg">
                </div>
                <p>El Imposible es una selva, en partes tropical y en otras sub-tropical. 
                    Ubicada sobre la Sierra de Apaneca-Ilamatepeque, posee la mayor 
                    biodiversidad en el país como parte de un bosque maduro, 
                    típico de los inicios de Mesoamérica.</p>
                
                <p>El Parque Nacional El Imposible, abierto al público desde 1997, 
                    ofrece al turista: áreas de acampar, un centro de interpretación, 
                    senderos interpretativos y convencionales, miradores, guías comunales, 
                    como también infraestructura adecuada para alojar a los visitantes.</p>
            </section>
            <br>
            <section>
                <div class="turismo">                    <h4 class="titulo-n3 vivid-sky-blue">Salto de Malacatiupán</h4>
                    <img src="assets/Ahuachapan/Salto-Malacatiupan.jpg">
                </div>
                <p>El Salto de Malacatiupan es la única cascadaen El Salvador con aguas 
                    termales, lo que lo convierte en un atractivo único, sumado a su 
                    belleza escénica de un terreno natural donde se une el río de Agua 
                    Caliente con el río San Antonio. El salto cuanta con tres cascadas, 
                    con una altura de 12 metros, aproximadamente.</p>

                <p>La catarata está a 20 minutos del centro de Atiquizaya, Ahuachapán, 
                    un pintoresco pueblo adornado con murales, incluyendo unos en 3D muy 
                    fotografiados por los turistas.</p>

                <p>Basta una pequeña caminata para deslumbrarse con el paisaje y el agua 
                    color turquesa. Los lugareños cuentan que la segunda y tercera cascada 
                    están divididas por una roca que se asemeja al rostro de un mono.</p>
            </section>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Geografia</h3>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Lagunas</h4>                <div class="geografia">
                    <img src="assets/Ahuachapan/Laguna-El-Espino.jpg" class="img-geo">
                    <p class="info-geo">
                        Laguna El Espino
                        <br>
                        El lugar cuenta con amplias zonas verdes, área de restaurante en 
                        el muelle sobre la laguna, donde los turistas pueden comer mientras 
                        disfrutan con una impresionante vista hacia el cuerpo de agua rodeado 
                        de mucha vegetación.
                        <br>
                        El restaurante posese dos piscinas para niños y adultos, el uso 
                        tiene un costo de $1.50 por persona. Además, hay glorietas donde 
                        puedes colgar hamacas para descansar o puedes usar las sombrillas 
                        que están frente a la laguna y así pasar un buen día con tu familia 
                        y amigos.
                        <br>
                        El espejo de agua antes era conocido como el «lago de las espinas» 
                        porque alrededor de él se encontraban zarzas y espinas. Según los 
                        residentes de la zona está envuelto de mitos y leyendas.
                        <br>
                        Algunas de las creencias son que al llegar la medianoche se aparece 
                        un lagarto y otra es que caen bolas fuego. Otros dicen que se aparece 
                        un pescado de oro.
                        <br>
                        Tiene una extensión de 34 hectáreas y en él habita una amplia variedad 
                        de plantas, destacando las ninfas acuáticas. También hay caracoles y 
                        algunas aves migratorias como garzas, gaviotas, pichiches y gallinas guineas.
                    </p>
                </div>
                <br>
                <div class="geografia">
                    <p class="info-geo">
                        La Laguna Verde
                        <br>
                        La belleza escénica de las montañas, las aguas cristalinas y el clima 
                        fresco es la mezcla perfecta que te brinda la Laguna de Apaneca.
                        <br>
                        La también conocida como Laguna Verde pertenece a la cadena volcánica 
                        reciente, sobre la cordillera de Apaneca- Ilamatepec, y es considerada 
                        un humedal de altura que cuenta con fauna distintiva y determinante; 
                        entre ellas, la fulica americana y podilymbus podiceps, especies de 
                        aves acuáticas que anidan en esta laguna. Hay 16 especies de aves en 
                        zonas altas de los alrededores, de las cuales algunas son migratorias, 
                        por lo que se le confiere la importancia de humedal.
                        <br>
                        Este cuerpo de agua posee un gran atractivo ecoturístico, allí puedes 
                        hacer picnics, dar paseos en lancha, observar aves, hacer senderismo, 
                        ciclismo y tours en buggies.
                    </p>
                    <img src="assets/Ahuachapan/Laguna-Verde.jpg" class="img-geo">
                </div>
                <br>
                <div class="geografia">
                    <img src="assets/Ahuachapan/Laguna-Ninfas.jpg" class="img-geo">
                    <p class="info-geo">
                        Lagunas de las Ninfas
                        <br>
                        La Laguna de las Ninfas es un tesoro escondido que se encuentra 
                        ubicado en el Cerro las Nifas en el municipio de Apaneca, departamento 
                        de Ahuachapán.
                        <br>
                        Este lugar es muy reconocido por sus sitios turísticos, que son 
                        frecuentados por turistas nacionales y extranjeros. Uno de los lugares 
                        que es un tesoro escondido en ese municipio es la Laguna de las Ninfas.
                        <br>
                        Para llegar hasta este misterioso lugar, los amantes de la aventura 
                        se enfrentan a un camino rústico rodeados de paisajes naturales impresionantes, 
                        que hacen desconectarse de la realidad y disfrutar de la naturaleza.
                        <br>
                        Tras una hora de camino, los visitantes llegan al lugar tan esperado: 
                        La Laguna de las Ninfas. Este lugar es denominado así por tener una gran 
                        cantidad de plantas de este tipo que crecen y florecen, convirtiendo en un 
                        lugar único en Apaneca.
                    </p>
                </div>
            </section>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Ríos</h4>
                <div class="geografia">
                    <img src="assets/Ahuachapan/Rio-paz.jpg" class="img-geo">
                    <p class="info-geo">
                        Río Paz
                        <br>
                        El río Paz nace en las montañas de Quezada (cerca del volcán Amayo), 
                        al noroeste del departamento de Jutiapa. El río sirve como frontera natural 
                        que marca la división natural entre Guatemala y El Salvador a lo largo de una 
                        gran parte de su curso.
                        <br>
                        Tiene constituido actualmente un recorrido de 134 km y sirve de línea 
                        divisoria entre Guatemala y El Salvador desde su confluencia con el río 
                        Chalchuapa hasta su desembocadura en el océano Pacífico a 16 km al sudoeste 
                        del municipio de San Francisco Menéndez, en el departamento de Ahuachapán. 
                        La cuenca del río Paz tiene una superficie de 1732 km² en Guatemala y 929 km² 
                        en El Salvador la profundidad del río Paz es de siete metros.
                    </p>
                </div>
            </section>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Cerros</h4>
                <div class="geografia">
                    <img src="assets/Ahuachapan/Cerro-Apaneca.jpg" class="img-geo">
                    <p class="info-geo">
                        Cerro Apaneca
                        <br>
                        (también conocido como Volcán Apaneca o Chichicastepeque): Con una altitud de 
                        1,831 metros sobre el nivel del mar, es una de las principales elevaciones del 
                        departamento.
                    </p>
                </div>
            </section>
        </article>
        <article>
            <h3 class="tema honolulu-blue">Personajes Célebres</h3>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Francisco Menéndez Valdivieso</h4>                <div class="personajes row">
                    <img src="assets/Ahuachapan/Francisco-Menendez-Valdivieso.jpg" class="img-persona">
                </div>
                <p>
                    Nació el 3 de diciembre de 1830 en Ahuachapán. Fueron sus padres, don José Eustaquio 
                    Menéndez y doña Gabriela Valdivieso, siendo la familia poseedores de algunas tierras 
                    que les daban una posición independiente y económica.
                </p>

                <p>Siendo muy joven se incorporó al partido liberal que abogaba por la unión centroamericana.</p>

                <p>Después de convertirse en presidente provisional, el 22 de junio de 1885, Menéndez 
                    se planteó escribir una nueva Constitución, conforme a los principios liberales. 
                    La Constitución promulgada en 1886 fue la octava de la historia de El Salvador que 
                    tuvo una vigencia de 53 años, de 1886 a 1939.</p>

                <p>En 1887 fue elegido presidente constitucional. Durante su gobierno, Menéndez promovió el 
                    cultivo del café en la zona occidental del país.</p>
            </section>
            <section>
                <h4 class="titulo-n3 vivid-sky-blue">Alfredo Espino</h4>                <div class="personajes row">
                    <img src="assets/Ahuachapan/Alfredo-espino.jpg" class="img-persona">
                </div>
                <p>
                    Edgardo Alfredo Espino Najarro, mejor conocido como Alfredo Espino, fue un poeta 
                    salvadoreño. Nació en el Departamento de Ahuachapán, zona occidental de El Salvador, 
                    en el año de 1900 y falleció el 24 de mayo de 1928 en San Salvador, El Salvador. 
                    Hijo de Enriqueta Najarro, maestra por vocación, y Alfonso Espino, poeta, creció 
                    en un hogar que respiraba poesía y amor al arte, su hermano Miguel Ángel Espino 
                    también creció para volverse artista de la pluma pero en la rama de la prosa.
                </p>
                <p>Ingresó a la Universidad de El Salvador en el año de 1920, inscribiéndose en 
                    la Jurisprudencia durante su instancia en la Ciudad Universitaria, fue parte 
                    de tantas actividades dentro de la misma inclusive de manifestaciones hechas 
                    por estudiantes para evitar el alza de los precios de pasaje en tranvía.</p>

                <p>Los últimos años de su vida se volvieron muy adversos, la negativa de sus 
                    padres para consentir su casamiento con ciertas jóvenes lo condujo a constantes 
                    desequilibrios emocionales y amorosos. Para mitigarlos, se entregó a largos ratos 
                    de bohemia, en bares y burdeles de la Capital Salvadoreña.</p>
            </section>
        </article>
    </main>
  `,
})
export class AhuachapanComponent {

}
