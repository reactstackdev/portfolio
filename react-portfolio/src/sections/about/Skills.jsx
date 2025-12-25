export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-3xl lg:max-w-4xl xl:max-w-5xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 mx-auto scroll-mt-16 lg:scroll-mt-32"
    >
      {/* Title */}
      <div className="mb-6 sm:mb-8 lg:mb-10">
        <span className="block mb-2 text-lg sm:text-xl lg:text-2xl font-bold tracking-wide text-indigo-900 uppercase dark:text-indigo-300">
          Skills
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4 sm:space-y-5 lg:space-y-6 text-base sm:text-lg lg:text-xl text-slate-700 dark:text-slate-300">
        <p>
          Estas son las principales <strong>habilidades técnicas y profesionales</strong> que
          he desarrollado a lo largo de mi formación y experiencia profesional.
        </p>

        <p>
          En el ámbito <strong>frontend</strong>, trabajo principalmente con{" "}
          <strong>React</strong>, creando interfaces limpias,
          reutilizables y centradas en la experiencia de usuario.
        </p>

        <p>
          A nivel de <strong>backend</strong>, tengo experiencia desarrollando lógica de
          negocio y APIs con <strong>Node.js</strong>, así como trabajando con{" "}
          <strong>bases de datos SQL</strong>.
        </p>

        <p>
          Además, he trabajado con otros lenguajes y tecnologías como{" "}
          <strong>JavaScript</strong>, <strong>Java</strong>, <strong>Python</strong>,{" "}
          <strong>Laravel</strong>, <strong>Flutter</strong> y <strong>Kotlin</strong>,
          lo que me permite adaptarme con facilidad a distintos entornos.
        </p>

        <p>
          En el plano profesional, destaco por mi <strong>responsabilidad</strong>, el{" "}
          <strong>trabajo en equipo</strong>, el <strong>aprendizaje continuo</strong> y
          el cumplimiento de plazos priorizando siempre la calidad del código.
        </p>
      </div>
    </section>
  );
}
