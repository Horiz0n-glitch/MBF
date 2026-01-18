import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="w-full bg-background-light dark:bg-background-dark min-h-screen">

                {/* Hero Section */}
                <section className="relative py-20 border-b border-border-light dark:border-border-dark overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10 pointer-events-none">
                        <span className="text-[20rem] display-font text-primary">BF</span>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <h1 className="text-6xl md:text-8xl display-font text-black dark:text-white mb-8">
                            NUESTRA<br />PASIÓN
                        </h1>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            <p>
                                Básquet Formativo nació en 2015 con una misión clara: profesionalizar la enseñanza del baloncesto en las etapas iniciales. Creemos que el futuro de este deporte depende de la calidad de los entrenadores que forman a los más jóvenes.
                            </p>
                            <p>
                                No somos solo una plataforma de cursos; somos una comunidad de apasionados por el aro, la pizarra y el desarrollo humano. Combinamos la ciencia del deporte con la pedagogía aplicada.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats / Impact */}
                <section className="bg-primary text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <span className="block text-5xl display-font mb-2">10+</span>
                                <span className="text-sm uppercase tracking-wider opacity-90">Años de experiencia</span>
                            </div>
                            <div>
                                <span className="block text-5xl display-font mb-2">5k+</span>
                                <span className="text-sm uppercase tracking-wider opacity-90">Alumnos Graduados</span>
                            </div>
                            <div>
                                <span className="block text-5xl display-font mb-2">15</span>
                                <span className="text-sm uppercase tracking-wider opacity-90">Países Alcanzados</span>
                            </div>
                            <div>
                                <span className="block text-5xl display-font mb-2">50+</span>
                                <span className="text-sm uppercase tracking-wider opacity-90">Cursos Producidos</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Grid */}
                <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl display-font mb-12 text-center text-black dark:text-white">Nuestros Pilares</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-border-light dark:border-border-dark">
                            <span className="material-icons text-4xl text-primary mb-4">school</span>
                            <h3 className="text-xl font-bold mb-3 uppercase">Educación Continua</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                El baloncesto evoluciona y nosotros también. Actualizamos nuestros contenidos constantemente.
                            </p>
                        </div>
                        <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-border-light dark:border-border-dark">
                            <span className="material-icons text-4xl text-primary mb-4">groups</span>
                            <h3 className="text-xl font-bold mb-3 uppercase">Comunidad</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Fomentamos el intercambio de conocimientos entre entrenadores novatos y expertos.
                            </p>
                        </div>
                        <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-border-light dark:border-border-dark">
                            <span className="material-icons text-4xl text-primary mb-4">psychology</span>
                            <h3 className="text-xl font-bold mb-3 uppercase">Visión Integral</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Formamos jugadores, pero sobre todo formamos personas. Los valores son innegociables.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 bg-gray-50 dark:bg-black/20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl display-font mb-12 text-black dark:text-white">El Equipo</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Team Member 1 */}
                            <div className="group">
                                <div className="aspect-square bg-gray-300 rounded-xl overflow-hidden mb-4 relative">
                                    <img src="https://i.pravatar.cc/300?u=director" alt="Director" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <h3 className="font-bold text-lg">Damián Ruiz</h3>
                                <p className="text-primary text-sm uppercase font-bold">Fundador & CEO</p>
                            </div>
                            {/* Team Member 2 */}
                            <div className="group">
                                <div className="aspect-square bg-gray-300 rounded-xl overflow-hidden mb-4 relative">
                                    <img src="https://i.pravatar.cc/300?u=academic" alt="Académico" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <h3 className="font-bold text-lg">Silvia Conti</h3>
                                <p className="text-primary text-sm uppercase font-bold">Directora Académica</p>
                            </div>
                            {/* Team Member 3 */}
                            <div className="group">
                                <div className="aspect-square bg-gray-300 rounded-xl overflow-hidden mb-4 relative">
                                    <img src="https://i.pravatar.cc/300?u=tech" alt="Tecnología" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <h3 className="font-bold text-lg">Marcos Paz</h3>
                                <p className="text-primary text-sm uppercase font-bold">Jefe de Tecnología</p>
                            </div>
                            {/* Team Member 4 */}
                            <div className="group">
                                <div className="aspect-square bg-gray-300 rounded-xl overflow-hidden mb-4 relative">
                                    <img src="https://i.pravatar.cc/300?u=marketing" alt="Marketing" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <h3 className="font-bold text-lg">Ana Soler</h3>
                                <p className="text-primary text-sm uppercase font-bold">Marketing y Comunicación</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
