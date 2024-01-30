import moment from "moment";

const btn = document.getElementById('generate');
const output = document.getElementById('output');

const terminos = document.getElementById('terminos');
const aviso = document.getElementById('aviso');
const cookies = document.getElementById('cookies');
const accesibilidad = document.getElementById('accesibilidad');

const elements = [terminos, aviso, cookies, accesibilidad];


let data = '';


output.innerHTML = '';

elements.forEach((element) => {
    element.addEventListener('click', () => {
      output.innerHTML = '';
      elements.forEach((el) => el.classList.remove('addColor'));
      element.classList.add('addColor');
      data = element.id;
    });
  });





 const copyToClipboard = (info) => {
    setTimeout(async()=>{
        await navigator.clipboard.writeText(info)
        .then(() => {
            alert('Content copied to clipboard');
        })
        .catch((error) => {
            alert('Failed to copy content to clipboard: ' + error);
        });
    },100)

};









btn.addEventListener('click', ()=>{

    output.innerHTML = '';
    

    if(data === 'terminos'){

        output.innerHTML = `
        <div class="bg-white text-black m-10 flex flex-col max-w-100 p-5 rounded">
            <label class="font-bold text-xl mb-3"for="nombre">Nombre de la Empresa &rarr;</label>
            <input type="text" class="mb-3 nombre">
            <label class="font-bold text-xl mb-3"for="correo">Correo electronico &rarr;</label>
            <input type="text" class="mb-3 correo">
            <label class="font-bold text-xl mb-3"for="direccion">Lugar de la empresa: &rarr;</label>
            <input type="text" class="mb-3 direccion">

            <button class="outline bg-black text-white hover:bg-white hover:text-black font-semibold  py-2 px-4 rounded mt-2 sender">COPY</button>
        </div>
            `;
        
        let nombre = document.querySelector('.nombre');
        let direccion = document.querySelector('.direccion');
        let correo = document.querySelector('.correo');

        let btnSender = document.querySelector('.sender');


        btnSender.addEventListener('click',()=>{
            
            let terminodeuso = `<p><strong>${nombre.value}</strong>, como responsable del presente Sitio Web y de conformidad con lo dispuesto por la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal (LOPD) y por la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), ha puesto en práctica aquellas políticas, medios y procedimientos técnicos y organizativos para garantizar y proteger la confidencialidad, integridad y disponibilidad de los datos de carácter personal de sus usuarios. Estos datos serán tratados en un/os fichero/s debidamente inscrito/s en la Agencia Española de Protección de Datos, de conformidad con lo establecido en la legislación vigente.</p>
            <p>En el caso de que los<span> </span><strong>datos</strong><span> </span>a facilitar<span> </span><strong>por el Usuario fueran necesarios</strong><span> </span><strong>para</strong><span> </span>que el equipo de<span> <strong>${nombre.value}</strong></span> pudiera i) responder a las<strong><span> </span>consultas</strong>, proporcionar informaciones requeridas por el Usuario; ii) realizar toda aquella prestación de<strong><span> </span>servicios</strong><span> </span>y/o productos contratados o suscritos por el Usuario; iii) proporcionar acceso al Usuario a determinadas funcionalidades del Sitio Web; o bien iv) realizar todas aquellas<span> </span><strong>actividades propias de</strong><span> <strong>${nombre.value}</strong></span> por la presente reseñadas,<span> <strong>${nombre.value}</strong></span><strong> informará de dicha obligatoriedad</strong><span> </span>al Usuario, indicándole qué datos son de necesaria cumplimentación. Mediante la indicación, facilitación o introducción de dichos datos y de conformidad con lo establecido en el artículo 6 de la L.O.P.D., el Usuario otorga consentimiento inequívoco a<span> <strong>${nombre.value}</strong></span><span> </span>para que proceda al tratamiento de los datos facilitados en pro de los fines mencionados anteriormente así como para el eventual envío de comunicaciones comerciales de<span> <strong>${nombre.value}</strong></span> que puedan ser del interés del usuario.</p>
            <p>La<span> </span><strong>entidad responsable de la base de datos</strong>,<strong><span> </span>así como los que intervengan</strong><span> </span>en cualquier fase del tratamiento y/o las entidades a quienes les hayan sido comunicadas -en su caso y en virtud de la correspondiente autorización conferida por el Usuario-, están<span> </span><strong>obligadas a observar el secreto profesional y a adoptar los niveles de protección y</strong><span> </span>las<strong><span> </span>medidas</strong><span> </span>técnicas y organizativas necesarias a su alcance que<span> </span><strong>garanticen la seguridad de los datos</strong><span> </span>de carácter personal, evitando, en la medida de lo posible, accesos no autorizados, modificaciones ilícitas, sustracciones y/o la pérdida de los datos, a fin de procurar el correspondiente nivel de seguridad a los ficheros de<span> <strong>${nombre.value}</strong></span>, según la naturaleza y sensibilidad de los datos facilitados por los usuarios del presente Sitio Web. Asimismo,<span> <strong>${nombre.value}</strong></span><span> </span>se compromete a tener implementadas las medidas de seguridad que correspondan en virtud de lo establecido en el Reglamento de Medidas de (R.D. 1720/2007).</p>
            <p>Los<span> </span><strong>usuarios tienen</strong><span> </span>reconocida por la indicada Ley Orgánica de Protección de Datos los<span> </span><strong>derechos de acceso, rectificación, cancelación y oposición y,</strong><span> </span>en su caso, el derecho a<span> </span><strong>revocar</strong><span> </span>en<span> </span><strong>cualquier momento</strong><span> </span>el<span> </span><strong>consentimiento</strong><span> </span>prestado a la recepción de comunicaciones comerciales mediante el envío de<span> </span><strong>correo electrónico a ${correo.value}</strong><span> </span><strong>o carta</strong><span> </span>a<strong><span> ${direccion.value}</span><b>.</b></strong></p>`
    
            copyToClipboard(terminodeuso);
            nombre.value = '';
            direccion.value = '';
            correo.value = '';
        })

    }

    if(data === 'aviso'){

        output.innerHTML = `
        <div class="bg-white text-black m-10 flex flex-col max-w-100 p-5 rounded">
        <label class="font-bold text-xl mb-3"for="nombre">Nombre de la Empresa &rarr;</label>
        <input type="text" class="mb-3 nombre">
        <label class="font-bold text-xl mb-3"for="correo">Correo electronico &rarr;</label>
        <input type="text" class="mb-3 correo">
        <label class="font-bold text-xl mb-3"for="direccion">Lugar de la empresa: &rarr;</label>
        <input type="text" class="mb-3 direccion">
        <label class="font-bold text-xl mb-3"for="numero">Número de telefono de la empresa &rarr;</label>
        <input type="text" class="mb-3 numero">
        <label class="font-bold text-xl mb-3"for="cif">CIF o DNI de la empresa &rarr;</label>
        <input type="text" class="mb-3 cif">

        <button class="outline bg-black text-white hover:bg-white hover:text-black font-semibold  py-2 px-4 rounded mt-2 sender">COPY</button>
    </div>
            `;



        let nombre = document.querySelector('.nombre');
        let direccion = document.querySelector('.direccion');
        let correo = document.querySelector('.correo');
        let numero = document.querySelector('.numero');
        let cif = document.querySelector('.cif');
    
        let btnSender = document.querySelector('.sender');



        btnSender.addEventListener('click',()=>{
            
            let avisolegal = `<p><strong>1. Información corporativa. </strong>En virtud de las obligaciones establecidas por la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico, le informamos que el presente sitio web es propiedad de ${nombre.value} con C.I.F. ${cif.value} con domicilio en ${direccion.value} y con los siguientes datos de contacto: ${numero.value}/ ${correo.value}.</p>
            <p ><strong>2. Protección de contenidos. </strong>El usuario reconoce y acepta que todos los derechos de propiedad industrial e intelectual sobre los contenidos y/o cualesquiera otros elementos insertados por ${nombre.value} en el presente Sitio Web (incluyendo, a título meramente enunciativo y no limitativo, todos aquellos elementos que conforman la apariencia visual, imagen gráfica y otros estímulos sensoriales del sitio web o «look and feel»: marcas, logotipos, nombres comerciales, textos, imágenes, gráficos, diseños, sonidos, bases de datos, software, diagramas de flujo, presentación, arquitectura de navegación, así como los códigos fuente de las páginas web) pertenecen a ${nombre.value} y/o a terceros a los cuales les han cedido sus derechos.</p>
            <p >En ningún caso el acceso al Sitio Web implica algún tipo de permiso, renuncia, transmisión, licencia o cesión total ni parcial de dichos derechos por parte de sus titulares, salvo que se establezca expresamente lo contrario. Los presentes términos y condiciones de uso del Sitio Web no confieren a los USUARIOS ningún otro derecho de utilización, alteración, explotación, reproducción, distribución o comunicación pública del Sitio Web y/o de sus contenidos distintos de los aquí expresamente previstos.</p>
            <p >Queda terminantemente prohibida la utilización de tales elementos, su total o parcial reproducción, comunicación y/o distribución con fines comerciales o lucrativos, así como su modificación, alteración, descompilación y/o cualquier otro acto de explotación del Sitio Web.</p>
            <p >Sin perjuicio de todo lo anterior, si el Usuario o un tercero estima que algún contenido del Sitio Web pudiera vulnerar derechos de propiedad intelectual e industrial, rogamos así lo pongan en nuestro conocimiento a la mayor brevedad posible.</p>
            <p ><strong>3. Acceso y uso del sitio web. </strong>Tanto el acceso al Sitio Web como el uso no consentido que pueda efectuarse de la información contenida en el mismo es de la exclusiva responsabilidad de quien lo realiza.</p>
            <p >El usuario se compromete a utilizar los contenidos, información y datos del Sitio Web de conformidad con las presentes condiciones, términos y políticas, con la normativa de aplicación y con las buenas costumbres generalmente aceptadas y el orden público.</p>
            <p >El usuario se obliga a abstenerse de utilizar los contenidos del Sitio Web con fines o efectos ilícitos, prohibidos o contrarios a los aquí establecidos, lesivos de los derechos e intereses de ${nombre.value}, de los demás usuarios, de terceros o que de cualquier forma puedan dañar, inutilizar, sobrecargar o deteriorar el presente Sitio Web o impedir la normal utilización o disfrute del mismo por parte de los usuarios.</p>
            <p >${nombre.value} no responderá de ninguna consecuencia, daño o perjuicio que pudiera derivarse de dicho acceso o uso o del incumplimiento de las presentes condiciones, términos y políticas ni se hará responsable de los errores de seguridad que se puedan producir ni de los daños que puedan causarse al sistema informático del usuario (hardware y software) o a los ficheros o documentos almacenados en el mismo como consecuencia de: (i) la presencia de un virus en el ordenador del usuario que sea utilizado para la conexión a los servicios y/o productos ofrecidos por ${nombre.value} a través de su Sitio Web; (ii) un mal funcionamiento del navegador; (iii) el uso de versiones no actualizadas del mismo.</p>
            <p ><strong>4. Enlaces a terceros. </strong>En el presente Sitio Web se pueden utilizar enlaces con otras páginas o sitios web. ${nombre.value} no se responsabiliza ni del contenido ni de las medidas de seguridad adoptadas por cualquier otra página o sitio web a través del cual se tiene acceso desde el presente Sitio Web, sitios a los que accede el interesado bajo su exclusiva responsabilidad.</p>
            <p >Asimismo, tampoco se garantiza la ausencia de virus u otros elementos en los contenidos enlazados desde el Sitio Web de ${nombre.value} que puedan producir alteraciones en el sistema informático (hardware y software) y/o en los documentos o los ficheros del Usuario, excluyendo asimismo a ${nombre.value} de toda responsabilidad derivada de los daños de cualquier índole ocasionados por todo lo anterior.</p>
            <p ><strong>5. Redes sociales.</strong></p>
            <p >Le informamos qué ${nombre.value} puede tener presencia en redes sociales. El tratamiento de los datos que se lleve a cabo de las personas que se hagan seguidoras en las redes sociales (y/o realicen cualquier vínculo o acción de conexión a través de las redes sociales) de las páginas oficiales de ${nombre.value} se regirá por este apartado, así como por aquellas condiciones de uso, políticas de privacidad y normativas de acceso que pertenezcan a la red social que proceda en cada caso y aceptadas previamente por el usuario.</p>
            <p >${nombre.value} tratará sus datos con las finalidades de administrar correctamente su presencia en la red social, informándole de actividades productos o servicios de ${nombre.value}, así como para cualquier otra finalidad que las normativas de las Redes Sociales permitan.</p>
            <p >Queda prohibida la publicación de contenidos:</p>
            
            <ul >
                <li>Que sean presuntamente ilícitos por la normativa nacional, comunitaria o internacional o que realicen actividades presuntamente ilícitas o contravengan los principios de la buena fe.</li>
                <li>Que atenten contra los derechos fundamentales de las personas, falten a la cortesía en la red, molesten o puedan generar opiniones negativas en nuestros usuarios o terceros y en general cualesquiera sean los contenidos que ${nombre.value} considere no apropiados.</li>
                <li>Y en general que contravengan los principios de legalidad, honradez, responsabilidad, protección de la dignidad humana, protección de menores, protección del orden público, la protección de la vida privada, la protección del consumidor y los derechos de propiedad intelectual e industrial.</li>
            </ul>
            <p >Asimismo, ${nombre.value} se reserva la potestad de retirar, sin previo aviso del sitio web o de la red social corporativa aquellos contenidos que se consideren no apropiados.</p>
            <p ><strong>6. Modificación de AVISO LEGAL, Política de Privacidad y de Protección de Datos. </strong>El Responsable del Fichero se reserva el derecho a modificar en todo momento y sin previo aviso las presentes condiciones, términos y políticas de privacidad para adaptarlas a las novedades legislativas o jurisprudenciales así como a las modificaciones o prácticas de la industria, debiendo el usuario consultar periódicamente las presentes condiciones, términos y políticas a fin de comprobar o cerciorarse de la existencia de cambios en las mismas, tomando como referencia la fecha de la última actualización.</p>`
        
            copyToClipboard(avisolegal);
            nombre.value = '';
            direccion.value = '';
            correo.value = '';
            numero.value = '';
            cif.value = '';
        })

    }

    if(data === 'cookies'){

        output.innerHTML = `
        <div class="bg-white text-black m-10 flex flex-col max-w-100 p-5 rounded">
        <label class="font-bold text-xl mb-3"for="correo">Correo electronico &rarr;</label>
        <input type="text" class="mb-3 correo">
        <button class="outline bg-black text-white hover:bg-white hover:text-black font-semibold  py-2 px-4 rounded mt-2 sender">COPY</button>
    </div>
        
        `;


        let correo = document.querySelector('.correo');

        let btnSender = document.querySelector('.sender');

        btnSender.addEventListener('click',()=>{
                
            let cookies = `<p ><span style="color: #666666;"><span style="font-family: Arial, sans-serif;"><span style="font-size: medium;"><span>Esta página web usa cookies para mejorar la experiencia del usuario. A continuación, encontrará información sobre qué son las cookies, qué tipo de cookies utiliza esta página, cómo puede desactivar las cookies en su navegador y cómo desactivar específicamente la instalación de cookies de terceros. Si no encuentra la información específica que usted está buscando, por favor envíe un correo a </span></span></span></span><a href="mailto:${correo.value}"><span style="color: #2ea3f2;"><span style="font-family: Arial, sans-serif;"><span style="font-size: medium;"><span>${correo.value}</span></span></span></span></a><span style="color: #666666;"><span style="font-family: Arial, sans-serif;"><span style="font-size: medium;"><span>.</span></span></span></span></p>
            <p ><strong><span style="color: #666666;"><span style="font-family: Arial, sans-serif;"><span style="font-size: medium;"><span>¿Qué son las cookies? </span></span></span></span></strong><span style="color: #666666;"><span style="font-family: Arial, sans-serif;"><span style="font-size: medium;"><span>Las cookies son pequeños archivos que algunas plataformas, como las páginas web, pueden instalar en su ordenador, smartphone, tableta o televisión conectada. Sus funciones pueden ser muy variadas: almacenar sus preferencias de navegación, recopilar información estadística, permitir ciertas funcionalidades técnicas, etc.</span></span></span></span></p>
            <p ><strong><span style="color: #666666;"><span style="font-family: Arial, sans-serif;"><span style="font-size: medium;"><span>¿Por qué las utilizamos? </span></span></span></span></strong><span style="color: #666666;"><span style="font-family: Arial, sans-serif;"><span style="font-size: medium;"><span>Las cookies son útiles por varios motivos. Desde un punto de vista técnico, permiten que las páginas web funcionen de forma más ágil y adaptada a sus preferencias, como por ejemplo almacenar su idioma o la moneda de su país. Además, ayudan a los responsables de los sitios web a mejorar los servicios que ofrecen, gracias a la información estadística que recogen a través de ellas y sirven para hacer más eficiente la publicidad que le podemos mostrar.</span></span></span></span></p>
            <p ><strong><span style="color: #666666;"><span style="font-family: Arial, sans-serif;"><span style="font-size: medium;"><span>¿Qué uso le damos a los diferentes tipos de cookies? </span></span></span></span></strong></p>
            
            <ul type="disc">
                <li>
            <p ><span style="color: #666666;"><span style="font-family: Arial, sans-serif;"><span style="font-size: medium;">Cookies de sesión: Las cookies de sesión son aquellas que duran el tiempo que el usuario está navegando por la página web y se borran al término.</span></span></span></p>
            </li>
                <li>
            <p ><span style="color: #666666;"><span style="font-family: Arial, sans-serif;"><span style="font-size: medium;">Cookies persistentes: Estas cookies quedan almacenadas en el terminal del usuario por un tiempo más largo, facilitando así el control de las preferencias elegidas sin tener que repetir ciertos parámetros cada vez que se visite el sitio web.</span></span></span></p>
            </li>
                <li>
            <p ><span style="color: #666666;"><span style="font-family: Arial, sans-serif;"><span style="font-size: medium;">Cookies propias: Son cookies creadas por este sitio web y que solo puede leer el propio sitio. Por ejemplo: cookies técnicas para la carga de imágenes, cookies de personalización de parámetros de la web, cookies de análisis de tráfico, etc.</span></span></span></p>
            </li>
                <li>
            <p ><span style="color: #666666;"><span style="font-family: Arial, sans-serif;"><span style="font-size: medium;">Cookies de terceros: Son cookies creadas por terceros y que utilizamos para diferentes servicios (por ej. Análisis del sitio web o publicidad).</span></span></span></p>
            </li>
            </ul>
            <p ><strong><span style="color: #666666;"><span style="font-family: Arial, sans-serif;"><span style="font-size: medium;"><span>Según su finalidad:</span></span></span></span></strong></p>
            
            <ul type="disc">
                <li>
            <p ><span style="color: #666666;"><span style="font-family: Arial, sans-serif;"><span style="font-size: medium;">Cookies técnicas: Las cookies técnicas son aquellas imprescindibles y estrictamente necesarias para el correcto funcionamiento de un portal Web y la utilización de las diferentes opciones y servicios que ofrece. Por ejemplo, las que sirven para el mantenimiento de la sesión, la gestión del tiempo de respuesta, rendimiento o validación de opciones, utilizar elementos de seguridad, compartir contenido con redes sociales, etc.</span></span></span></p>
            </li>
            </ul>
            <p ><span style="color: #666666;"> </span></p>
            
            <ul type="disc">
                <li>
            <p ><span style="color: #666666;"><span style="font-family: Arial, sans-serif;"><span style="font-size: medium;">Cookies de personalización:Estas cookies permiten al usuario especificar o personalizar algunas características de las opciones generales de la página Web. Por ejemplo, definir el idioma, configuración regional o tipo de navegador.</span></span></span></p>
            </li>
            </ul>
            <p ><span style="color: #666666;"> </span></p>
            
            <ul type="disc">
                <li>
            <p ><span style="color: #666666;"><span style="font-family: Arial, sans-serif;"><span style="font-size: medium;">Cookies analíticas: Las cookies analíticas son las utilizadas por nuestro portal Web, para elaborar perfiles de navegación y poder conocer las preferencias de los usuarios del mismo con el fin de mejorar la oferta de productos y servicios. Por ejemplo, mediante una cookie analítica se controlarían las áreas geográficas de mayor interés de un usuario, cuál es el producto de más aceptación, etc.</span></span></span></p>
            </li>
            </ul>
            <p ><span style="color: #666666;"> </span></p>
            
            <ul type="disc">
                <li>
            <p ><span style="color: #666666;"><span style="font-family: Arial, sans-serif;"><span style="font-size: medium;">Cookies publicitarias: Las cookies publicitarias permiten la gestión de los espacios publicitarios en base a criterios concretos. Por ejemplo la frecuencia de acceso, el contenido editado, etc. Las cookies de publicidad permiten a través de la gestión de la publicidad almacenar información del comportamiento a través de la observación de hábitos, estudiando los accesos y formando un perfil de preferencias del usuario, para ofrecerle publicidad relacionada con los intereses de su perfil.</span></span></span></p>
            </li>
            </ul>
            <p ><span style="color: #666666;"> </span></p>
            <p ><strong><span style="color: #666666;"> </span></strong><strong><span style="color: #666666;"><span style="font-family: Arial, sans-serif;"><span style="font-size: medium;"><span>¿Cómo puedo cambiar la configuración de las cookies?</span></span></span></span></strong></p>
            <p ><a href="http://windows.microsoft.com/es-es/windows-vista/block-or-allow-cookies" target="_blank" rel="noopener"><span style="color: #2ea3f2;"><span style="font-family: Arial, sans-serif;"><span style="font-size: medium;"><span>Configuración de cookies de Internet Explorer</span></span></span></span></a></p>
            <p ><a href="http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we" target="_blank" rel="noopener"><span style="color: #2ea3f2;"><span style="font-family: Arial, sans-serif;"><span style="font-size: medium;"><span>Configuración de cookies de Firefox</span></span></span></span></a></p>
            <p ><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener"><span style="color: #2ea3f2;"><span style="font-family: Arial, sans-serif;"><span style="font-size: medium;"><span>Configuración de cookies de Google Chrome</span></span></span></span></a></p>
            <p ><a href="http://support.apple.com/kb/HT1677?viewlocale=es_ES&amp;locale=es_ES" target="_blank" rel="noopener"><span style="color: #2ea3f2;"><span style="font-family: Arial, sans-serif;"><span style="font-size: medium;"><span>Configuración de cookies de Safari</span></span></span></span></a></p>
            <p ><a href="http://www.macromedia.com/support/documentation/es/flashplayer/help/settings_manager03.html" target="_blank" rel="noopener"><span style="color: #2ea3f2;"><span style="font-family: Arial, sans-serif;"><span style="font-size: medium;"><span>Configuración de cookies Flash</span></span></span></span></a></p>
            <p ><span style="color: #666666;"><span style="font-family: Arial, sans-serif;"><span style="font-size: medium;">Si desea no permitir almacenar ningún tipo de dato de Flash Player, deseleccione las casillas “Permitir que el contenido de Flash almacene información en el equipo” y “Almacenar los componentes comunes de Flash para reducir los tiempos de descarga”. Si desea limitar la cantidad de datos recogidos por las aplicaciones flash deslice el indicador de la barra del panel de configuración global de almacenamiento en la posición que desee.</span></span></span></p>
            <p ><span style="color: #666666;"><span style="font-family: Arial, sans-serif;"><span style="font-size: medium;">Estos navegadores están sometidos a actualizaciones o modificaciones, por lo que no podemos garantizar que se ajusten completamente a la versión de su navegador. También puede ser que utilice otro navegador no contemplado en estos enlaces como Konqueror, Arora, Flock, etc. Para evitar estos desajustes, puede acceder directamente desde las opciones de su navegador, generalmente en el menú de «Opciones» en la sección de «Privacidad». (Por favor, consulte la ayuda de su navegador para más información).</span></span></span></p>`
    

            copyToClipboard(cookies);
            correo.value = '';
        })

    }


    if(data === 'accesibilidad'){


        output.innerHTML = `
        <div class="bg-white text-black m-10 flex flex-col max-w-100 p-5 rounded">
        <label class="font-bold text-xl mb-3"for="direccion">Lugar de la empresa &rarr;</label>
        <input type="text" class="mb-3 direccion">
        <label class="font-bold text-xl mb-3"for="url">Url del sitio &rarr;</label>
        <input type="text" class="mb-3 url">
        <button class="outline bg-black text-white hover:bg-white hover:text-black font-semibold py-2 px-4 rounded mt-2 sender">COPY</button>
    </div>
        
        `;


        let direccion = document.querySelector('.direccion');
        let url = document.querySelector('.url');
        let btnSender = document.querySelector('.sender');
       
        
        let date = moment();
        let dateEs = date.locale('es');
        let fecha = dateEs.format('D/MM/YYYY');
        let fechaL = dateEs.format('LL');





        btnSender.addEventListener('click',()=>{

            console.log();
            
            let accesibilidad = `<p >Actualizado: ${fecha}</p>
            <p >Angélica León se compromete en hacer accesible su sitio web de conformidad con el<span> </span><a href="https://www.boe.es/diario_boe/txt.php?id=BOE-A-2018-12699" target="_blank" rel="noopener noreferrer" role="link">Real Decreto 1112/2018, sobre accesibilidad de los sitios webs y aplicaciones para dispositivos móviles del sector público. </a></p>
            <p >La presente declaración de accesibilidad se aplica al sitio web<span> </span><a href="${url.value}/" role="link">${url.value.split('//')[1].replace('/','')}</a>.</p>
            
            <h1 class="text-4xl m-0 mb-3" >Situación de cumplimiento</h1>
            <p >Este sitio web es<span> </span><strong>plenamente </strong><strong>conforme</strong> con el RD 1112/2018.</p>
            
            <h2 class="text-3xl m-0 mb-3" >Preparación de la presente declaración de accesibilidad:</h2>
            <p >La presente declaración fue preparada el ${fechaL}.</p>
            <p >El método empleado para preparar la declaración ha sido una autoevaluación llevada a cabo por el equipo de accesibilidad de la entidad.</p>
            <p >Última revisión de la declaración: ${fechaL}.</p>
            
            <h2 class="text-3xl m-0 mb-3" >Observaciones y datos de contacto:</h2>
            <p >Puede realizar comunicaciones sobre requisitos de accesibilidad (artículo 10.2.a) del RD 1112/2018) como por ejemplo:</p>
            <p >1. Informar sobre cualquier posible incumplimiento por parte de este sitio web.</p>
            <p >2. Transmitir otras dificultades de acceso al contenido</p>
            <p >3. Formular cualquier otra consulta o sugerencia de mejora relativa a la accesibilidad del sitio web</p>
            <p >A través de nuestros formulario de contacto, o de manera presencial en: ${direccion.value}</p>
            <p >Indicando en el Asunto: «Accesibilidad Web»</p>
            <p >Las comunicaciones serán recibidas y tratadas por el equipo de Accesibilidad.</p>
            <p ><strong>Contenido opcional</strong></p>
            <p >En esta web se han adoptado una serie de medidas cuyo objetivo es mejorar la accesibilidad. Las ventajas que esto conlleva son, entre otras:</p>
            <p >1. Facilitar el acceso de las personas independientemente de su condición física o de su entorno.</p>
            <p >2. Incluir contenidos claros y bien estructurados.</p>
            <p >3. Mejorar la navegación y la experiencia del usuario.</p>
            <p >Entre las medidas adoptadas:</p>
            <p ><strong>Botón lateral derecho de Accesibilidad</strong></p>
            <p >En todas las páginas de la web, cuentan con un botón en el lateral izquierdo con símbolo de accesibilidad, que cuando pinchamos en el se abre un «pop up» con las diferentes opciones de accesibilidad visual que pueden afectar a la página web.</p>
            <p ><strong>Atajos de teclado</strong></p>
            
            <ul>
                <li class="relative ml-5 list-disc" >Internet Explorer 6 o superiores: ALT + Tecla de acceso rápido + Tecla ENTER</li>
                <li class="relative ml-5 list-disc" >Mozilla Firefox 2.0 o superiores: ALT + MAYUSCULAS + Tecla de acceso rápido (configuración – avanzada en navegador con dos teclas)</li>
                <li class="relative ml-5 list-disc" >Opera: Tecla Mayúsculas + Esc para activar las teclas de acceso rápido</li>
                <li class="relative ml-5 list-disc" >Safari: COMMAND + Tecla de acceso rápido</li>
                <li class="relative ml-5 list-disc" >Chrome: Según sistema operativo (Definido debajo)</li>
                <li class="relative ml-5 list-disc" >MacOS: COMMAND + Tecla de acceso rápido.</li>
                <li class="relative ml-5 list-disc" >Windows: CTRL + Tecla de acceso rápido.</li>
            </ul>`
            copyToClipboard(accesibilidad);
            url.value = '';
            direccion.value = '';
        })
    }



})





