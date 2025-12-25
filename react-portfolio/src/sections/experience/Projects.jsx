export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-3xl px-6 pt-24 pb-20 mx-auto scroll-mt-32"
    >
      {/* Title */}
      <div className="mb-10">
        <span className="block mb-2 text-xl font-bold tracking-wide text-indigo-900 uppercase dark:text-indigo-300">
          Proyectos
        </span>
      </div>

      {/* Content */}
      <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300">
        <p>
          A lo largo de mi formación y experiencia profesional he desarrollado
          diversos <strong>proyectos personales</strong> enfocados principalmente
          en el desarrollo frontend con <strong>React</strong>.
        </p>

        <p>
          Estos proyectos me han permitido consolidar conocimientos en{" "}
          <strong>arquitectura de componentes</strong>, reutilización de código y
          buenas prácticas de desarrollo, así como experimentar con diferentes
          enfoques y soluciones técnicas.
        </p>

        <p>
          Mantengo un <strong>repositorio en crecimiento en GitHub</strong>, al cual puedes acceder
          desde la barra de navegación clicando en <strong>GitHub</strong>, donde
          publico aplicaciones web en desarrollo, utilizando tecnologías como{" "}
          <strong>React</strong>, y <strong>Node.js</strong>.
        </p>

        <p>
          Cada proyecto está pensado como una oportunidad de aprendizaje,
          priorizando la calidad del código, la claridad de la interfaz y la
          resolución de problemas reales.
        </p>
      </div>
    </section>
  );
}
