export default function Education() {
  return (
    <section
      id="education"
      className="max-w-3xl px-6 pt-24 pb-20 mx-auto scroll-mt-32"
    >
      {/* Title */}
      <div className="mb-10">
        <span className="block mb-2 text-xl font-bold tracking-wide text-indigo-900 uppercase dark:text-indigo-300">
          Educación
        </span>
      </div>

      {/* Content */}
      <div className="space-y-8 text-lg text-slate-700 dark:text-slate-300">

        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100">
            Grado en Ingeniería Informática
          </h3>
          <p className="mb-2 text-sm text-slate-500">
            Universidad de León
          </p>
          <p>
            Formación universitaria enfocada al desarrollo de software,
            programación, bases de datos y fundamentos de la ingeniería
            informática.
          </p>
        </div>
      </div>
    </section>
  );
}
