import logo from "../../assets/images/profile.png";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-6 text-center">
      <div className="flex flex-col items-center gap-6">
        <img
          src={logo}
          alt="Foto de Sergio"
          className="w-40 h-40 rounded-full shadow-2xl ring-4 ring-indigo-500/20 md:w-52 md:h-52"
        />

        <h1 className="text-4xl font-bold md:text-6xl text-slate-900 dark:text-slate-100">
          Hola, soy{" "}
          <span className="text-indigo-900 dark:text-indigo-300">
            Sergio
          </span>
        </h1>

        <p className="max-w-xl text-lg text-slate-600 dark:text-slate-400">
          Desarrollador Full Stack apasionado por crear soluciones web innovadoras.
        </p>
      </div>
    </section>
  );
}
