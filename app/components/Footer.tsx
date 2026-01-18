import Link from "next/link";

export default function Footer() {
    return (
        <footer className="pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t-2 border-black dark:border-white pt-12">
                <div>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-8">
                        Nuestra Misión
                    </h2>
                    <div className="relative">
                        <h3 className="text-5xl md:text-6xl display-font uppercase leading-none text-gray-300 dark:text-gray-700">
                            Formando<br />El Futuro<br />Del
                        </h3>
                        <h3 className="text-5xl md:text-6xl display-font uppercase leading-none mt-2 text-black dark:text-white">
                            Básquetbol<br />Latino
                        </h3>
                        <span className="material-icons absolute top-0 right-0 md:right-auto md:left-[350px] text-4xl text-primary animate-bounce">
                            sports_basketball
                        </span>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-bold uppercase text-sm mb-4">Cursos</h4>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <li><Link className="hover:text-primary" href="/cursos">Básquet Formativo</Link></li>
                                <li><Link className="hover:text-primary" href="/cursos">Entrenamiento Avanzado</Link></li>
                                <li><Link className="hover:text-primary" href="/cursos">Técnicas</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold uppercase text-sm mb-4">Compañía</h4>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <li><Link className="hover:text-primary" href="#">Sobre Nosotros</Link></li>
                                <li><Link className="hover:text-primary" href="#">Noticias</Link></li>
                                <li><Link className="hover:text-primary" href="#">Contacto</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold uppercase text-sm mb-4">Conectar</h4>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <li><a className="hover:text-primary" href="https://twitter.com/jrgarciadev" target="_blank">Twitter</a></li>
                                <li><a className="hover:text-primary" href="#">Facebook</a></li>
                                <li><a className="hover:text-primary" href="#">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 flex flex-col md:flex-row justify-between items-end md:items-center">
                        <div className="text-xs text-gray-500">
                            © 2026 Basquet Formativo. Desarrollado por Horizont.
                        </div>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <Link className="text-xs text-gray-500 hover:text-black dark:hover:text-white" href="#">
                                Privacidad
                            </Link>
                            <Link className="text-xs text-gray-500 hover:text-black dark:hover:text-white" href="#">
                                Términos
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
