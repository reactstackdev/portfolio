export default function Certification() {
  return (
    <section
      id="certifications"
      className="max-w-3xl px-6 pt-24 pb-20 mx-auto scroll-mt-32"
    >
      {/* Title */}
      <div className="mb-10">
        <span className="block mb-2 text-xl font-bold tracking-wide text-indigo-900 uppercase dark:text-indigo-300">
          Certificaciones
        </span>
      </div>

      {/* Content */}
      <div className="space-y-8 text-lg text-slate-700 dark:text-slate-300">

        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100">
            Cisco Certified CyberOps Associate
          </h3>
          <p className="mb-2 text-sm text-slate-500">
            Cisco
          </p>
          <p>
            Certificación profesional orientada a <strong>ciberseguridad</strong>,
            análisis de amenazas y fundamentos de operaciones de seguridad,
            reforzando la comprensión de entornos y sistemas informáticos.
          </p>
        </div>

      </div>
    </section>
  );
}
