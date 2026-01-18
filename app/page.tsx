import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="w-full overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
            <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-5 pointer-events-none select-none overflow-hidden">
              <h1 className="text-[8rem] md:text-[12rem] leading-none text-black dark:text-white whitespace-nowrap">
                ENTRENA
              </h1>
            </div>
            <div className="lg:col-span-4 mt-20 relative z-10">
              <div className="border-t-2 border-black dark:border-white pt-4 mb-4">
                <span className="text-sm font-mono text-gray-500 dark:text-gray-400">
                  EST. 2026
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl display-font leading-none mb-6 text-black dark:text-white">
                MEJORA TU<br />JUEGO HOY
              </h1>
            </div>
            <div className="lg:col-span-4 flex justify-center relative z-20 -mt-10 lg:mt-0">
              <div className="bg-primary p-8 rounded-2xl shadow-2xl text-white transform rotate-2 hover:rotate-0 transition-transform duration-500 w-full max-w-sm">
                <div className="flex justify-between items-start mb-12">
                  <span className="material-icons text-4xl">sports_basketball</span>
                  <span className="text-xs border border-white px-2 py-1 rounded-full">
                    ÚNETE AHORA
                  </span>
                </div>
                <p className="text-lg font-medium leading-relaxed mb-8">
                  Capacítate para ser el mejor entrenador. Aumenta tus conocimientos y habilidades con nuestros cursos especializados en básquet formativo.
                </p>
                <div className="flex justify-between items-end border-t border-white/30 pt-4">
                  <span className="text-xs uppercase tracking-wider">
                    Desde 2015
                  </span>
                  <span className="material-icons animate-bounce">
                    arrow_downward
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col items-end justify-center lg:mt-20">
              <div className="border-b-2 border-black dark:border-white w-full text-right pb-4 mb-4">
                <span className="text-5xl md:text-7xl display-font text-black dark:text-white">
                  NIVEL PRO
                </span>
              </div>
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-black dark:border-white mt-4 bg-gray-200">
                {/* Fallback pattern or logic for image */}
                <img
                  alt="Basketball hoop"
                  className="w-full h-full object-cover"
                  src="https://firebasestorage.googleapis.com/v0/b/basquet-formativo.appspot.com/o/images%2FCancha-Blanca-50.png?alt=media&token=fb103b37-5df5-46f2-8521-39259a133baf"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <span className="material-icons text-white text-4xl">
                    play_circle
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About/Methodology Section */}
        <section className="py-20 bg-white dark:bg-surface-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">
                Nuestra Filosofía
              </h2>
              <p className="max-w-2xl text-xl text-gray-800 dark:text-gray-200">
                En Básquet Formativo, nos aseguramos de contar con entrenadores altamente calificados, comprometidos en ayudarte a alcanzar el máximo rendimiento.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-border-light dark:border-border-dark rounded-3xl p-8 flex flex-col items-center justify-center hover:shadow-lg transition-shadow bg-surface-light dark:bg-black group cursor-pointer h-64 relative overflow-hidden">
                <div className="absolute top-4 left-4 text-xs font-mono text-gray-400">
                  01
                </div>
                <span className="material-icons text-6xl mb-4 group-hover:text-primary transition-colors">
                  school
                </span>
                <h3 className="text-2xl display-font">Formativo</h3>
                <p className="text-center text-sm text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Habilidades fundamentales para iniciación deportiva.
                </p>
                <div className="absolute bottom-4 w-full px-8">
                  <div className="h-1 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-700"></div>
                  </div>
                </div>
              </div>
              <div className="border border-border-light dark:border-border-dark rounded-3xl p-8 flex flex-col items-center justify-center hover:shadow-lg transition-shadow bg-surface-light dark:bg-black group cursor-pointer h-64 relative overflow-hidden">
                <div className="absolute top-4 left-4 text-xs font-mono text-gray-400">
                  02
                </div>
                <span className="material-icons text-6xl mb-4 group-hover:text-primary transition-colors">
                  emoji_events
                </span>
                <h3 className="text-2xl display-font">Avanzado</h3>
                <p className="text-center text-sm text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Estrategias defensivas y liderazgo de equipo.
                </p>
                <div className="absolute bottom-4 w-full px-8">
                  <div className="h-1 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-700 delay-100"></div>
                  </div>
                </div>
              </div>
              <div className="border border-border-light dark:border-border-dark rounded-3xl p-8 flex flex-col items-center justify-center hover:shadow-lg transition-shadow bg-surface-light dark:bg-black group cursor-pointer h-64 relative overflow-hidden">
                <div className="absolute top-4 left-4 text-xs font-mono text-gray-400">
                  03
                </div>
                <span className="material-icons text-6xl mb-4 group-hover:text-primary transition-colors">
                  military_tech
                </span>
                <h3 className="text-2xl display-font">Elite</h3>
                <p className="text-center text-sm text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Tecnificación y análisis de rendimiento superior.
                </p>
                <div className="absolute bottom-4 w-full px-8">
                  <div className="h-1 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-700 delay-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlight Section */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              {/* Using a placeholder or one of the extracted images if suitable. Texture image used as bg? */}
              <img
                alt="Entrenador en acción"
                className="w-full h-[600px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                src="https://firebasestorage.googleapis.com/v0/b/basquet-formativo.appspot.com/o/images%2Ffloor-texture.jpg?alt=media&token=2ac1c71a-742b-4661-a781-dec60b85f8a7"
              />
              <div className="absolute top-6 right-6 bg-primary text-white w-24 h-24 rounded-full flex items-center justify-center animate-spin-slow">
                {/* SVG Circle text */}
                <svg className="absolute w-full h-full" viewBox="0 0 100 100">
                  <path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" id="circle" fill="none"></path>
                  <text fill="white" fontSize="12" fontWeight="bold" letterSpacing="1.8">
                    <textPath xlinkHref="#circle">BÁSQUET FORMATIVO • 2026 •</textPath>
                  </text>
                </svg>
                <span className="material-icons text-3xl transform -rotate-12">bolt</span>
              </div>
              <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
                <h3 className="text-white text-5xl display-font mb-2">
                  Cursos Online
                </h3>
                <Link href="/cursos" className="text-white underline decoration-primary decoration-2 underline-offset-4 font-bold hover:text-primary transition-colors">
                  VER CATÁLOGO
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-8">
              <div className="border-t-4 border-primary pt-6">
                <h2 className="text-4xl md:text-5xl display-font mb-4">
                  INNOVANDO CON<br />CONOCIMIENTO
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Creemos que el conocimiento es clave para el éxito en el baloncesto.
                  Nuestros programas están diseñados para brindarte las herramientas teóricas y prácticas necesarias
                  para destacar en la formación de jugadores.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg h-40 w-full bg-gray-300 flex items-center justify-center overflow-hidden">
                    <img src="https://firebasestorage.googleapis.com/v0/b/basquet-formativo.appspot.com/o/images%2FLogo%20Grupo%20Horianski.PNG?alt=media&token=cbf3646a-c9f3-40bb-9d5c-5ff3183055be" className="object-cover w-full h-full" alt="Partner 1" />
                  </div>
                  <div className="rounded-lg h-40 w-full bg-gray-300 flex items-center justify-center overflow-hidden">
                    <img src="https://res.cloudinary.com/dzqdjsrez/image/upload/v1726054543/MBF_OKK_wcguyw.png" className="object-contain p-4 w-full h-full" alt="Partner 2" />
                  </div>
                </div>
                <Link href="/cursos" className="inline-flex items-center mt-6 text-sm font-bold uppercase tracking-wide hover:text-primary">
                  Saber Más <span className="material-icons ml-2 text-sm bg-primary text-white rounded-full p-0.5">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50 dark:bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mr-4">
                De Un Vistazo
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl border border-border-light dark:border-border-dark">
                <h3 className="text-5xl display-font mb-2">85%</h3>
                <p className="text-sm text-gray-500">
                  Aumento en habilidades técnicas reportado por nuestros alumnos.
                </p>
              </div>
              <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl border border-border-light dark:border-border-dark">
                <h3 className="text-5xl display-font mb-2">90%</h3>
                <p className="text-sm text-gray-500">
                  Mejora significativa en la toma de decisiones en cancha.
                </p>
              </div>
              <div className="bg-primary text-white p-8 rounded-2xl">
                <h3 className="text-5xl display-font mb-2">100+</h3>
                <p className="text-sm opacity-90">
                  Entrenadores capacitados en nuestra plataforma.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
