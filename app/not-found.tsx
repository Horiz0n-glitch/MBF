import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function NotFound() {
    return (
        <>
            <Header />
            <main className="w-full min-h-[calc(100vh-theme(spacing.16))] flex flex-col items-center justify-center bg-background-light dark:bg-background-dark text-center px-4">
                <h1 className="text-9xl display-font text-primary mb-4">404</h1>
                <h2 className="text-4xl md:text-5xl display-font text-black dark:text-white mb-6">
                    PÁGINA NO ENCONTRADA
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg mb-12">
                    Lo sentimos, la página que buscas no existe o ha sido movida.
                </p>
                <Link
                    href="/"
                    className="bg-primary text-white px-10 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-black hover:text-white transition-colors duration-300"
                >
                    Volver al Inicio
                </Link>
            </main>
            <Footer />
        </>
    );
}
