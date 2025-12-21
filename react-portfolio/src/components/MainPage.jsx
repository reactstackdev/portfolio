import { ThemeToggleButton } from '../assets/buttons.jsx';
import CardNav from './CardNav';
import logo from '../assets/images/profile.png';

export default function MainPage() {
  
  const navItems = [
    {
      label: 'Sobre mí',
      bgColor: '#F8F9FA',
      textColor: '#111827',
      links: [
        { label: 'Quién soy', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Stack', href: '#skills' }
      ]
    },
    {
      label: 'Experiencia',
      bgColor: '#EEF2FF',
      textColor: '#1E3A8A',
      links: [
        { label: 'Experiencia laboral', href: '#experience' },
        { label: 'Proyectos reales', href: '#projects' }
      ]
    },
    {
      label: 'Estudios',
      bgColor: '#ECFEFF',
      textColor: '#155E75',
      links: [
        { label: 'Formación', href: '#education' },
        { label: 'Certificaciones', href: '#education' }
      ]
    }
  ];


  return (
    <div className="min-h-screen bg-slate-300 dark:bg-slate-900">
      
      <CardNav items={navItems} />
      
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center ">

        <div className="flex flex-col items-center gap-6">
          <img
            src={logo}
            alt="Foto de Sergio"
            className="w-40 h-40 rounded-full shadow-2xl ring-4 ring-indigo-500/20 md:w-52 md:h-52"
          />

          <h1 className="text-4xl font-bold md:text-6xl text-slate-900 dark:text-slate-100">
            Hola, soy{' '}
            <span className="text-indigo-900 dark:text-indigo-300">
              Sergio
            </span>
          </h1>

          <p className="max-w-xl text-lg text-slate-600 dark:text-slate-400">
            Desarrollador Full Stack apasionado por crear soluciones web innovadoras.
          </p>
        </div>
        
      </section>

      {/* <section id="about">Sobre mí</section>
      <section id="skills">Skills</section>
      <section id="experience">Experiencia</section>
      <section id="education">Estudios</section> */}
      
      <div className="fixed z-50 top-6 right-6">
        <ThemeToggleButton />
      </div>
    </div>
  );
}
