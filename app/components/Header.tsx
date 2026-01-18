import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full border-b border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl md:text-2xl font-bold display-font italic text-primary">
                            BÁSQUET FORMATIVO
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/cursos" className="text-sm font-semibold uppercase hover:text-primary transition-colors">
                            Cursos
                        </Link>
                        <Link href="/noticias" className="text-sm font-semibold uppercase hover:text-primary transition-colors">
                            Noticias
                        </Link>
                        <Link href="/sobre-nosotros" className="text-sm font-semibold uppercase hover:text-primary transition-colors">
                            Sobre Nosotros
                        </Link>
                        <Link href="/contacto" className="text-sm font-semibold uppercase hover:text-primary transition-colors">
                            Contacto
                        </Link>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                            <span className="material-icons text-xl">search</span>
                        </button>
                        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                            <span className="material-icons text-xl">shopping_bag</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
