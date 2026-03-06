import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { getPodcasts } from "../lib/podcast";
import { getImageUrl } from "../lib/courses";

export const dynamic = 'force-dynamic';

export default async function PodcastPage() {
    const podcasts = await getPodcasts();

    return (
        <>
            <Header />
            <main className="w-full bg-bg-site min-h-screen">

                {/* Header Section */}
                <section className="bg-surface-site py-20 border-b border-border-site">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-6xl md:text-8xl display-font text-text-site mb-6">
                            PODCAST
                        </h1>
                        <p className="text-xl max-w-2xl text-text-site opacity-70">
                            Escucha las últimas entrevistas, análisis y debates sobre el básquet formativo.
                        </p>
                    </div>
                </section>

                {/* News Grid */}
                <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {podcasts.map((item) => (
                            <article key={item.id} className="flex flex-col group cursor-pointer">
                                <Link href={`/podcast/${item.slug}`} className="block overflow-hidden rounded-2xl mb-6 relative aspect-video">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img
                                        src={getImageUrl(item.imagen)}
                                        alt={item.titulo}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            {item.categoria}
                                        </span>
                                    </div>
                                </Link>

                                <div className="flex-1 flex flex-col">
                                    <div className="text-xs font-mono text-gray-400 mb-3 flex items-center">
                                        <span>{item.fecha}</span>
                                        <span className="mx-2">•</span>
                                        <span>{item.autor}</span>
                                        {item.duracion && (
                                            <>
                                                <span className="mx-2">•</span>
                                                <span className="flex items-center text-primary">
                                                    <span className="material-icons text-xs mr-1">schedule</span>
                                                    {item.duracion}
                                                </span>
                                            </>
                                        )}
                                    </div>
                                    <h2 className="text-2xl display-font text-text-site mb-3 group-hover:text-primary transition-colors leading-tight">
                                        <Link href={`/podcast/${item.slug}`}>
                                            {item.titulo}
                                        </Link>
                                    </h2>
                                    <p className="text-text-site opacity-60 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                                        {item.resumen}
                                    </p>
                                    <Link href={`/podcast/${item.slug}`} className="inline-flex items-center text-sm font-bold uppercase tracking-wide hover:text-primary transition-colors mt-auto">
                                        Escuchar Podcast <span className="material-icons ml-2 text-sm">play_circle</span>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Newsletter / CTA */}
                <section className="py-20 bg-bg-site border-t border-border-site">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <span className="material-icons text-5xl text-primary mb-6 animate-bounce">mail</span>
                        <h2 className="text-3xl display-font mb-4">No te pierdas nada</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            Suscríbete a nuestro newsletter semanal para recibir consejos de entrenamiento y novedades directamente en tu correo.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Tu correo electrónico"
                                className="flex-1 bg-surface-site border border-border-site text-text-site rounded-full px-6 py-3 focus:outline-none focus:border-primary transition-colors placeholder:opacity-50"
                            />
                            <button className="bg-text-site text-bg-site hover:bg-primary hover:text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest transition-all">
                                Suscribirse
                            </button>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
