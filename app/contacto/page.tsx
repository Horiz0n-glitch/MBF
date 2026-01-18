import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="w-full bg-background-light dark:bg-background-dark min-h-screen">

                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

                    {/* Contact Form Section */}
                    <div className="p-8 md:p-20 flex flex-col justify-center bg-surface-light dark:bg-surface-dark">
                        <h1 className="text-5xl md:text-7xl display-font text-black dark:text-white mb-6">
                            HABLEMOS
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-md">
                            ¿Tienes dudas sobre los cursos? ¿Te gustaría organizar una clínica en tu ciudad? Escríbenos.
                        </p>

                        <form className="space-y-6 max-w-lg w-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Nombre</label>
                                    <input type="text" className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-700 focus:border-primary px-0 py-2 outline-none transition-colors font-medium" placeholder="Tu nombre" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Apellido</label>
                                    <input type="text" className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-700 focus:border-primary px-0 py-2 outline-none transition-colors font-medium" placeholder="Tu apellido" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Email</label>
                                <input type="email" className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-700 focus:border-primary px-0 py-2 outline-none transition-colors font-medium" placeholder="tucorreo@ejemplo.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Asunto</label>
                                <select className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-700 focus:border-primary px-0 py-2 outline-none transition-colors font-medium cursor-pointer">
                                    <option>Información General</option>
                                    <option>Soporte Técnico</option>
                                    <option>Contratar Clínica Presencial</option>
                                    <option>Prensa / Colaboraciones</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Mensaje</label>
                                <textarea className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-700 focus:border-primary px-0 py-2 outline-none transition-colors font-medium h-32 resize-none" placeholder="Escribe tu mensaje aquí..."></textarea>
                            </div>

                            <button className="bg-black dark:bg-white text-white dark:text-black px-10 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-all w-full md:w-auto mt-4">
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>

                    {/* Info Section / Map Visual */}
                    <div className="bg-black text-white p-8 md:p-20 flex flex-col justify-between relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold uppercase mb-12 border-b border-white/20 pb-4 inline-block">Información de Contacto</h2>

                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <span className="material-icons text-primary mr-4">location_on</span>
                                    <div>
                                        <h3 className="font-bold uppercase text-sm mb-1 text-gray-400">Oficinas Centrales</h3>
                                        <p className="text-lg">Av. del Libertador 1234, Piso 5<br />Buenos Aires, Argentina</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <span className="material-icons text-primary mr-4">email</span>
                                    <div>
                                        <h3 className="font-bold uppercase text-sm mb-1 text-gray-400">Email</h3>
                                        <p className="text-lg">contacto@basketformativo.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <span className="material-icons text-primary mr-4">phone</span>
                                    <div>
                                        <h3 className="font-bold uppercase text-sm mb-1 text-gray-400">Teléfono</h3>
                                        <p className="text-lg">+54 11 1234 5678</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Map BG */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover bg-center mix-blend-overlay pointer-events-none"></div>

                        <div className="relative z-10 mt-20">
                            <p className="text-sm text-gray-500">
                                Horario de atención:<br />
                                Lunes a Viernes de 9:00 a 18:00 hs (GMT-3)
                            </p>
                        </div>
                    </div>

                </div>

            </main>
            <Footer />
        </>
    );
}
