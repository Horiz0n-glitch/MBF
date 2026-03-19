'use client';

import { useAuth } from '../lib/auth-context';
import { useRouter } from 'next/navigation';

interface Props {
    courseId: string;
}

export default function EnrollButton({ courseId }: Props) {
    const { isLoggedIn } = useAuth();
    const router = useRouter();

    if (!isLoggedIn) {
        return (
            <button
                onClick={() => router.push('/login')}
                className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-lg w-full md:w-auto shadow-lg hover:shadow-primary/30 transition-all"
            >
                Registrarse para inscribirse
            </button>
        );
    }

    return (
        <button
            onClick={() => router.push(`/checkout/${courseId}`)}
            className="bg-black dark:bg-white text-white dark:text-black hover:bg-primary hover:text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-lg w-full md:w-auto shadow-lg transition-all"
        >
            Comprar Curso
        </button>
    );
}
