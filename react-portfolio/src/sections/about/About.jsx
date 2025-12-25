export default function About() {
  return (
    <section
      id="about"
      className="max-w-3xl lg:max-w-4xl xl:max-w-5xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 mx-auto scroll-mt-16 lg:scroll-mt-32"
    >
      {/* Title */}
      <div className="mb-6 sm:mb-8 lg:mb-10">
        <span className="block mb-2 text-lg sm:text-xl lg:text-2xl font-bold tracking-wide text-indigo-900 uppercase dark:text-indigo-300">
          ¿Quién soy?
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4 sm:space-y-5 lg:space-y-6 text-base sm:text-lg lg:text-xl text-slate-700 dark:text-slate-300">
        <p>
          Soy <strong>Sergio García Yugueros</strong>, desarrollador Full Stack con
          especial interés en el desarrollo frontend con <strong>React</strong> y
          experiencia en backend con <strong>Node.js</strong>.
        </p>

        <p>
          Me enfoco en crear aplicaciones web bien estructuradas y mantenibles,
          cuidando la experiencia de usuario y la calidad del código.
        </p>

        <p>
          He trabajado en entornos profesionales donde el compromiso, la
          organización y el trabajo en equipo son fundamentales, valores que
          aplico también en el desarrollo de software.
        </p>
      </div>
    </section>
  );
}
