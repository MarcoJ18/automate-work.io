export const legalTexts = {
    Terminosdeuso: (company, email, address) => {
        return `
<style>
     .legalidad{text-align:center;}
</style>
  <main>
  <h2 class="legalidad">Terminos de uso</h2>
    <section>
      <p>
        <strong>${company}</strong>, como responsable del presente Sitio Web y de conformidad con lo dispuesto por la
        Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal (LOPD) y por la Ley 34/2002,
        de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), ha puesto en
        práctica aquellas políticas, medios y procedimientos técnicos y organizativos para garantizar y proteger la
        confidencialidad, integridad y disponibilidad de los datos de carácter personal de sus usuarios. Estos datos serán
        tratados en un/os fichero/s debidamente inscrito/s en la Agencia Española de Protección de Datos, de conformidad con
        lo establecido en la legislación vigente.
      </p>

      <p>
        En el caso de que los <strong>datos</strong> a facilitar <strong>por el Usuario fueran necesarios</strong> <strong>para</strong> que el
        equipo de <strong>${company}</strong> pudiera:
      </p>
      <ul>
        <li>Responder a las <strong>consultas</strong> y proporcionar informaciones requeridas por el Usuario.</li>
        <li>Realizar toda aquella prestación de <strong>servicios</strong> y/o productos contratados o suscritos por el Usuario.</li>
        <li>Proporcionar acceso al Usuario a determinadas funcionalidades del Sitio Web.</li>
        <li>Realizar todas aquellas <strong>actividades propias de ${company}</strong> reseñadas en este documento.</li>
      </ul>

      <p>
        <strong>${company}</strong> informará de dicha obligatoriedad al Usuario, indicándole qué datos son de necesaria cumplimentación.
        Mediante la indicación, facilitación o introducción de dichos datos y de conformidad con lo establecido en el
        artículo 6 de la L.O.P.D., el Usuario otorga consentimiento inequívoco a <strong>${company}</strong> para que proceda al
        tratamiento de los datos facilitados en pro de los fines mencionados anteriormente, así como para el eventual envío
        de comunicaciones comerciales de <strong>${company}</strong> que puedan ser de su interés.
      </p>

      <p>
        La <strong>entidad responsable de la base de datos</strong>, así como quienes intervengan en cualquier fase del tratamiento y/o
        las entidades a quienes les hayan sido comunicadas —en su caso y en virtud de la correspondiente autorización
        conferida por el Usuario—, están <strong>obligadas a observar el secreto profesional y a adoptar los niveles de protección</strong> y
        las <strong>medidas</strong> técnicas y organizativas necesarias a su alcance que <strong>garanticen la seguridad de los datos</strong> de carácter personal.
        Esto con el fin de evitar accesos no autorizados, modificaciones ilícitas, sustracciones y/o pérdidas de los datos,
        procurando así el nivel de seguridad adecuado según la naturaleza y sensibilidad de los datos facilitados por los
        usuarios de este Sitio Web.
      </p>

      <p>
        Asimismo, <strong>${company}</strong> se compromete a tener implementadas las medidas de seguridad que correspondan conforme a lo
        establecido en el Reglamento de Medidas de (R.D. 1720/2007).
      </p>

      <p>
        Los <strong>usuarios tienen</strong> reconocidos por la mencionada Ley Orgánica de Protección de Datos los <strong>derechos de acceso,
        rectificación, cancelación y oposición</strong>, y, en su caso, el derecho a <strong>revocar</strong> en <strong>cualquier momento</strong> el
        <strong>consentimiento</strong> prestado a la recepción de comunicaciones comerciales, mediante el envío de un correo electrónico a
        <strong>${email}</strong> o una carta a <strong>${address}</strong>.
      </p>
    </section>
  </main>
`;
    }
};
