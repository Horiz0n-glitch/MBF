import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { COURSES } from "../../lib/courses";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return COURSES.map((course) => ({
        id: course.id.toString(),
    }));
}

export default async function CourseDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const course = COURSES.find((c) => c.id.toString() === id);

    if (!course) {
        notFound();
    }

    return (
        <>
            <Header />
            <main className="w-full bg-background-light dark:bg-background-dark min-h-screen pb-20">
                {/* Hero Course */}
                <section className="relative h-[60vh] min-h-[500px] flex items-end">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 text-white">
                        <div className="flex space-x-4 mb-4">
                            <span className="bg-primary px-4 py-1 text-sm font-bold uppercase tracking-wider rounded-full">
                                {course.category}
                            </span>
                            <span className="border border-white/50 px-4 py-1 text-sm font-bold uppercase tracking-wider rounded-full">
                                {course.level}
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl display-font mb-4 leading-none">
                            {course.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl font-light">
                            {course.description}
                        </p>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
                    <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-2xl border border-border-light dark:border-border-dark p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div>
                            <span className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2 block">
                                Precio del Curso
                            </span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl display-font text-primary">{course.price}</span>
                                <span className="text-gray-400 line-through text-lg">$99.99</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">Acceso de por vida • Certificado incluido</p>
                        </div>
                        <button className="bg-black dark:bg-white text-white dark:text-black hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-all px-10 py-5 rounded-full font-bold uppercase tracking-widest text-lg w-full md:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Comprar Ahora
                        </button>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl display-font mb-8 border-b-2 border-black dark:border-white pb-4 inline-block">
                                Lo que aprenderás
                            </h2>
                            <ul className="space-y-6">
                                {course.features?.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="material-icons text-primary mr-4 mt-1">check_circle</span>
                                        <span className="text-lg text-gray-700 dark:text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl display-font mb-8 border-b-2 border-black dark:border-white pb-4 inline-block">
                                Instructor
                            </h2>
                            <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl border border-border-light dark:border-border-dark flex items-center space-x-6">
                                <div className="w-24 h-24 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                                    <img src={course.instructor.image} alt={course.instructor.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">{course.instructor.name}</h3>
                                    <p className="text-sm text-primary font-bold uppercase mb-2">{course.instructor.role}</p>
                                    <p className="text-sm text-gray-500">
                                        {course.instructor.bio}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
