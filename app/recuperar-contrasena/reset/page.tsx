'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { resetPasswordAction } from '../../lib/actions';

function ResetPasswordForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();
    const token = searchParams.get('token');

    if (!token) {
        return (
            <div className="text-center space-y-4">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 p-6 rounded-xl text-sm">
                    El link es inválido o ha expirado. Solicitá uno nuevo.
                </div>
                <Link href="/recuperar-contrasena" className="block text-primary font-bold hover:underline text-sm">
                    Solicitar nuevo link
                </Link>
            </div>
        );
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(event.currentTarget);
        const password = formData.get('password') as string;
        const confirm = formData.get('confirm') as string;

        if (password !== confirm) {
            setError('Las contraseñas no coinciden');
            setIsLoading(false);
            return;
        }

        formData.set('token', token!);
        const result = await resetPasswordAction(formData);

        if (result?.error) {
            setError(result.error);
            setIsLoading(false);
        } else {
            setSuccess(true);
            setTimeout(() => router.push('/login'), 3000);
        }
    }

    if (success) {
        return (
            <div className="text-center space-y-4">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-600 dark:text-green-400 p-6 rounded-xl text-sm font-medium">
                    ¡Contraseña restablecida con éxito! Redirigiendo al inicio de sesión...
                </div>
            </div>
        );
    }

    return (
        <>
            {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 p-4 rounded-xl mb-8 text-sm text-center">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Nueva contraseña</label>
                    <input
                        name="password"
                        type="password"
                        required
                        minLength={8}
                        placeholder="Mínimo 8 caracteres"
                        className="w-full bg-gray-50 dark:bg-black/20 border border-border-light dark:border-border-dark rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Confirmar contraseña</label>
                    <input
                        name="confirm"
                        type="password"
                        required
                        minLength={8}
                        placeholder="Repetí la contraseña"
                        className="w-full bg-gray-50 dark:bg-black/20 border border-border-light dark:border-border-dark rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                </div>

                <button
                    disabled={isLoading}
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:shadow-lg hover:shadow-primary/30 transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? 'Guardando...' : 'Restablecer contraseña'}
                </button>
            </form>
        </>
    );
}

export default function ResetPasswordPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark px-4">
            <div className="w-full max-w-md">
                <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-2xl border border-border-light dark:border-border-dark overflow-hidden">
                    <div className="p-8 md:p-12">
                        <div className="text-center mb-10">
                            <h1 className="text-4xl display-font mb-2">Nueva Contraseña</h1>
                            <p className="text-gray-500 dark:text-gray-400">Ingresá tu nueva contraseña para restablecer el acceso.</p>
                        </div>

                        <Suspense fallback={<div className="p-4 text-center">Cargando...</div>}>
                            <ResetPasswordForm />
                        </Suspense>
                    </div>
                </div>
            </div>
        </main>
    );
}
