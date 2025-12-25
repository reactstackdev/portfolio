export default function About() {
  return (
    <section
      id="about"
      className="max-w-3xl px-6 pt-24 pb-20 mx-auto scroll-mt-32"
    >
      {/* Title */}
      <div className="mb-10">
        <span className="block mb-2 text-xl font-bold tracking-wide text-indigo-900 uppercase dark:text-indigo-300">
          ¿Quién soy?
        </span>
      </div>

      {/* Content */}
      <div className="space-y-5 text-lg text-slate-700 dark:text-slate-300">
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
