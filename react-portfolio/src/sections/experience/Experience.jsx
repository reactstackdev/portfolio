export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-3xl lg:max-w-4xl xl:max-w-5xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 mx-auto scroll-mt-16 lg:scroll-mt-32"
    >
      {/* Title */}
      <div className="mb-6 sm:mb-8 lg:mb-10">
        <span className="block mb-2 text-lg sm:text-xl lg:text-2xl font-bold tracking-wide text-indigo-900 uppercase dark:text-indigo-300">
          Experiencia
        </span>
      </div>

      {/* Content */}
      <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-slate-700 dark:text-slate-300">
        
        <div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Programador Full Stack · Soluciones Smart de Territorio
          </h3>
          <p className="mb-2 text-sm sm:text-base text-slate-500">
            Septiembre 2025 – Actualidad · León
          </p>
          <p>
            Desarrollo de aplicaciones web participando tanto en tareas de{" "}
            <strong>frontend</strong> como de <strong>backend</strong>, trabajando en
            equipo y aplicando buenas prácticas de desarrollo en entornos reales.
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Prácticas Universitarias · CDS (HP Enterprise Company)
          </h3>
          <p className="mb-2 text-sm sm:text-base text-slate-500">
            Octubre 2024 – Enero 2025 · León (Híbrido)
          </p>
          <p>
            Desarrollo de aplicaciones web utilizando <strong>Next.js</strong>,
            adquiriendo experiencia práctica en proyectos profesionales y
            flujos de trabajo reales.
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Prácticas Universitarias · Certitec
          </h3>
          <p className="mb-2 text-sm sm:text-base text-slate-500">
            Julio 2024 – Septiembre 2024 · Astorga
          </p>
          <p>
            Desarrollo de soluciones de programación y trabajo con{" "}
            <strong>bases de datos SQL</strong>, reforzando la lógica y el enfoque
            práctico del desarrollo.
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Técnico · Electro Garpa S.L.
          </h3>
          <p className="mb-2 text-sm sm:text-base text-slate-500">
            Julio 2022 – Septiembre 2025 · Astorga
          </p>
          <p>
            Experiencia clave en <strong>organización</strong>,{" "}
            <strong>responsabilidad</strong> y resolución de problemas, valores
            que aplico directamente en el desarrollo de software.
          </p>
        </div>

      </div>
    </section>
  );
}
