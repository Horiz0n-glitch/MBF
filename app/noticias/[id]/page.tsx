import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NEWS } from "../../lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return NEWS.map((item) => ({
        id: item.id.toString(),
    }));
}

export default async function NewsDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const newsItem = NEWS.find((n) => n.id.toString() === id);

    if (!newsItem) {
        notFound();
    }

    return (
        <>
            <Header />
            <main className="w-full bg-background-light dark:bg-background-dark min-h-screen">

                {/* News Hero */}
                <section className="relative h-[50vh] min-h-[400px] flex items-end">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={newsItem.image}
                            alt={newsItem.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark via-background-light/80 dark:via-background-dark/80 to-transparent"></div>
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 text-center">
                        <div className="flex justify-center gap-4 mb-6">
                            <span className="bg-primary text-white px-4 py-1 text-sm font-bold uppercase tracking-wider rounded-full">
                                {newsItem.category}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl display-font mb-6 leading-tight text-black dark:text-white">
                            {newsItem.title}
                        </h1>
                        <div className="flex items-center justify-center space-x-2 text-sm font-mono text-gray-600 dark:text-gray-400">
                            <span>{newsItem.date}</span>
                            <span>•</span>
                            <span className="text-primary font-bold">{newsItem.author}</span>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <article className="prose prose-lg dark:prose-invert max-w-none first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3">
                        <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
                    </article>

                    {/* Share / Tags */}
                    <div className="mt-16 pt-8 border-t border-border-light dark:border-border-dark flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <span className="font-bold uppercase text-sm">Compartir:</span>
                            <button className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <span className="material-icons text-sm">share</span>
                            </button>
                            <button className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <span className="material-icons text-sm">link</span>
                            </button>
                        </div>
                        <Link href="/noticias" className="font-bold uppercase text-sm hover:text-primary transition-colors flex items-center">
                            <span className="material-icons text-sm mr-2 transform rotate-180">arrow_forward</span>
                            Volver a Noticias
                        </Link>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
