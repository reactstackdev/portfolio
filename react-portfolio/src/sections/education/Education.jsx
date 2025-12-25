export default function Education() {
  return (
    <section
      id="education"
      className="max-w-3xl lg:max-w-4xl xl:max-w-5xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 mx-auto scroll-mt-16 lg:scroll-mt-32"
    >
      {/* Title */}
      <div className="mb-6 sm:mb-8 lg:mb-10">
        <span className="block mb-2 text-lg sm:text-xl lg:text-2xl font-bold tracking-wide text-indigo-900 uppercase dark:text-indigo-300">
          Educación
        </span>
      </div>

      {/* Content */}
      <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-slate-700 dark:text-slate-300">

        <div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Grado en Ingeniería Informática
          </h3>
          <p className="mb-2 text-sm sm:text-base text-slate-500">
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
