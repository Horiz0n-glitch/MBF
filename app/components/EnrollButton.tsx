import { cookies } from 'next/headers';
import Link from 'next/link';
import { createDirectus, rest, staticToken, readMe, readItems } from '@directus/sdk';

interface Props {
    courseId: string;
}

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055';
const ADMIN_TOKEN = process.env.DIRECTUS_ADMIN_TOKEN || 'WmX7KmV0IYu8uqyJoUnt7lCLRlDO-_9a';

export default async function EnrollButton({ courseId }: Props) {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_session')?.value;

    if (!token) {
        return (
            <Link
                href="/login"
                className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-lg w-full md:w-auto shadow-lg hover:shadow-primary/30 transition-all inline-block text-center"
            >
                Registrarse para inscribirse
            </Link>
        );
    }

    // Verificar si ya tiene acceso usando el cliente administrativo
    const adminClient = createDirectus(DIRECTUS_URL).with(rest()).with(staticToken(ADMIN_TOKEN));
    const userClient = createDirectus(DIRECTUS_URL).with(rest()).with(staticToken(token));
    
    let hasAccess = false;
    let courseSlug = '';

    try {
        // Obtenemos el ID del usuario actual con su propio token
        const user = await userClient.request(readMe());
        
        // Verificamos el acceso con el token ADMIN para evitar líos de permisos del rol Alumno
        const accessArr = await adminClient.request(readItems('accesos_cursos', {
            filter: {
                usuario: { _eq: user.id },
                curso: { _eq: courseId },
                activo: { _eq: true }
            },
            fields: ['id', 'curso.slug'],
            limit: 1
        }));
        
        if (accessArr && (accessArr as any[]).length > 0) {
            hasAccess = true;
            courseSlug = (accessArr as any[])[0].curso.slug;
        }
    } catch (e: any) {
        // El error {} suele ser un objeto de error de Directus no serializado
        console.error('Error verificando acceso (EnrollButton):', e?.message || 'Error desconocido');
    }

    if (hasAccess) {
        return (
            <Link
                href={`/cursos/${courseSlug}`}
                className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-lg w-full md:w-auto shadow-lg transition-all inline-block text-center"
            >
                Ya tienes acceso • Ver curso
            </Link>
        );
    }

    return (
        <Link
            href={`/checkout/${courseId}`}
            className="bg-black dark:bg-white text-white dark:text-black hover:bg-primary hover:text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-lg w-full md:w-auto shadow-lg transition-all inline-block text-center"
        >
            Comprar Curso
        </Link>
    );
}
