import logo from "../../assets/images/profile.png";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-8">
        <img
          src={logo}
          alt="Foto de Sergio"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-64 xl:h-64 rounded-full shadow-2xl ring-4 ring-indigo-500/20"
        />

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 dark:text-slate-100">
          Hola, soy{" "}
          <span className="text-indigo-900 dark:text-indigo-300">
            Sergio
          </span>
        </h1>

        <p className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400">
          Desarrollador Full Stack apasionado por crear soluciones web innovadoras.
        </p>
      </div>
    </section>
  );
}
