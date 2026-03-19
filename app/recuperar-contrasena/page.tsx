'use client';

import { useState } from 'react';
import Link from 'next/link';
import { requestPasswordResetAction } from '../lib/actions';

export default function RecuperarContrasenaPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [sent, setSent] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(event.currentTarget);
        const result = await requestPasswordResetAction(formData);

        if (result?.error) {
            setError(result.error);
            setIsLoading(false);
        } else {
            setSent(true);
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark px-4">
            <div className="w-full max-w-md">
                <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-2xl border border-border-light dark:border-border-dark overflow-hidden">
                    <div className="p-8 md:p-12">
                        <div className="text-center mb-10">
                            <h1 className="text-4xl display-font mb-2">Recuperar Contraseña</h1>
                            <p className="text-gray-500 dark:text-gray-400">
                                Ingresá tu email y te enviaremos un link para restablecer tu contraseña.
                            </p>
                        </div>

                        {sent ? (
                            <div className="text-center space-y-6">
                                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-600 dark:text-green-400 p-6 rounded-xl text-sm font-medium">
                                    ¡Email enviado! Revisá tu bandeja de entrada y seguí el link para restablecer tu contraseña.
                                </div>
                                <Link
                                    href="/login"
                                    className="block text-primary font-bold hover:underline text-sm"
                                >
                                    Volver al inicio de sesión
                                </Link>
                            </div>
                        ) : (
                            <>
                                {error && (
                                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 p-4 rounded-xl mb-8 text-sm text-center">
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email</label>
                                        <input
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="tu@email.com"
                                            className="w-full bg-gray-50 dark:bg-black/20 border border-border-light dark:border-border-dark rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        />
                                    </div>

                                    <button
                                        disabled={isLoading}
                                        type="submit"
                                        className="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:shadow-lg hover:shadow-primary/30 transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? 'Enviando...' : 'Enviar link de recuperación'}
                                    </button>
                                </form>

                                <div className="mt-8 text-center text-sm text-gray-500">
                                    <Link href="/login" className="text-primary font-bold hover:underline">
                                        Volver al inicio de sesión
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
