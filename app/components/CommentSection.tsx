
'use client';

import { useState } from 'react';
import { postCommentAction } from '../lib/actions';
import { Comment } from '../lib/courses';

export default function CommentSection({
    courseId,
    classId,
    initialComments,
    isLoggedIn
}: {
    courseId: string;
    classId: string;
    initialComments: Comment[];
    isLoggedIn: boolean;
}) {
    const [content, setContent] = useState('');
    const [replyingTo, setReplyingTo] = useState<string | null>(null);
    const [replyContent, setReplyContent] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent, isReply = false) => {
        e.preventDefault();
        const text = isReply ? replyContent : content;
        if (!text.trim()) return;

        setLoading(true);
        const result = await postCommentAction(courseId, classId, text, isReply ? replyingTo! : undefined);
        setLoading(false);

        if (result.success) {
            if (isReply) {
                setReplyContent('');
                setReplyingTo(null);
            } else {
                setContent('');
            }
        } else {
            alert(result.error);
        }
    };

    return (
        <section className="mt-12 bg-white dark:bg-surface-dark rounded-3xl p-8 border border-border-light dark:border-border-dark">
            <h2 className="text-2xl display-font mb-8 flex items-center gap-2">
                <span className="material-icons text-primary">forum</span>
                Consultas y Dudas
            </h2>

            {/* Formulario Principal */}
            {isLoggedIn ? (
                <form onSubmit={(e) => handleSubmit(e)} className="mb-12">
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Escribe tu consulta aquí..."
                        className="w-full bg-background-light dark:bg-black/20 border border-border-light dark:border-border-dark rounded-2xl p-4 text-sm focus:outline-none focus:border-primary transition-colors min-h-32 mb-4"
                    />
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-primary text-white px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:scale-105 transition-transform disabled:opacity-50"
                        >
                            {loading ? 'Enviando...' : 'Publicar Consulta'}
                        </button>
                    </div>
                </form>
            ) : (
                <div className="bg-gray-50 dark:bg-black/20 p-6 rounded-2xl text-center mb-12 border border-dashed border-gray-300 dark:border-gray-700">
                    <p className="text-sm text-gray-500">Debes <a href="/login" className="text-primary font-bold hover:underline">iniciar sesión</a> para dejar una duda.</p>
                </div>
            )}

            {/* Lista de Comentarios */}
            <div className="space-y-8">
                {initialComments.length === 0 ? (
                    <p className="text-center text-gray-400 italic py-8">No hay consultas aún en esta clase. ¡Sé el primero!</p>
                ) : (
                    initialComments.map((comment) => (
                        <div key={comment.id} className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                    {comment.usuario.first_name[0]}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-1">
                                        <span className={`font-bold text-sm ${comment.es_instructor ? 'text-primary' : ''}`}>
                                            {comment.usuario.first_name} {comment.usuario.last_name}
                                        </span>
                                        {comment.es_instructor && (
                                            <span className="bg-primary text-white text-[8px] font-black px-2 py-0.5 rounded uppercase tracking-wider">Instructor</span>
                                        )}
                                        <span className="text-[10px] text-gray-400 font-mono">
                                            {new Date(comment.fecha).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                                        {comment.contenido}
                                    </p>

                                    {isLoggedIn && !comment.padre && (
                                        <button
                                            onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                                            className="text-[10px] font-bold uppercase tracking-widest text-primary hover:underline flex items-center gap-1"
                                        >
                                            <span className="material-icons text-xs">reply</span> Responder
                                        </button>
                                    )}

                                    {/* Formulario de Respuesta */}
                                    {replyingTo === comment.id && (
                                        <form onSubmit={(e) => handleSubmit(e, true)} className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                            <textarea
                                                value={replyContent}
                                                onChange={(e) => setReplyContent(e.target.value)}
                                                placeholder="Respuesta..."
                                                className="w-full bg-gray-50 dark:bg-black/40 border border-border-light dark:border-border-dark rounded-xl p-3 text-sm focus:outline-none focus:border-primary transition-colors min-h-24 mb-3"
                                            />
                                            <div className="flex justify-end gap-2 text-xs">
                                                <button
                                                    type="button"
                                                    onClick={() => setReplyingTo(null)}
                                                    className="px-4 py-2 text-gray-400 font-bold uppercase"
                                                >
                                                    Cancelar
                                                </button>
                                                <button
                                                    type="submit"
                                                    disabled={loading}
                                                    className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full font-bold uppercase tracking-widest"
                                                >
                                                    {loading ? '...' : 'Responder'}
                                                </button>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>

                            {/* Respuestas (Hilos) */}
                            {comment.respuestas && comment.respuestas.length > 0 && (
                                <div className="ml-14 space-y-6 border-l-2 border-gray-100 dark:border-gray-800 pl-6">
                                    {comment.respuestas.map((reply) => (
                                        <div key={reply.id} className="flex gap-4">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${reply.es_instructor ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-800'}`}>
                                                {reply.usuario.first_name[0]}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-1">
                                                    <span className={`font-bold text-xs ${reply.es_instructor ? 'text-primary' : ''}`}>
                                                        {reply.usuario.first_name} {reply.usuario.last_name}
                                                    </span>
                                                    {reply.es_instructor && (
                                                        <span className="bg-primary text-white text-[8px] font-black px-2 py-0.5 rounded uppercase tracking-wider">Instructor</span>
                                                    )}
                                                    <span className="text-[10px] text-gray-400 font-mono">
                                                        {new Date(reply.fecha).toLocaleDateString()}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                                                    {reply.contenido}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}
