'use client';

import { useState } from 'react';
import { approvePurchaseAction, rejectPurchaseAction } from '../../lib/actions';

export default function PurchaseActions({ solicitudId }: { solicitudId: string }) {
    const [loading, setLoading] = useState<'approve' | 'reject' | null>(null);
    const [notas, setNotas] = useState('');
    const [showReject, setShowReject] = useState(false);
    const [done, setDone] = useState<'approved' | 'rejected' | null>(null);
    const [error, setError] = useState<string | null>(null);

    async function handleApprove() {
        setLoading('approve');
        setError(null);
        const result = await approvePurchaseAction(solicitudId);
        if (result?.error) { setError(result.error); setLoading(null); }
        else setDone('approved');
    }

    async function handleReject() {
        setLoading('reject');
        setError(null);
        const result = await rejectPurchaseAction(solicitudId, notas);
        if (result?.error) { setError(result.error); setLoading(null); }
        else setDone('rejected');
    }

    if (done === 'approved') {
        return <p className="text-green-600 dark:text-green-400 font-bold text-sm">✅ Acceso otorgado al alumno</p>;
    }
    if (done === 'rejected') {
        return <p className="text-red-500 dark:text-red-400 font-bold text-sm">❌ Solicitud rechazada</p>;
    }

    return (
        <div className="space-y-3">
            {error && (
                <p className="text-red-500 text-sm font-medium">{error}</p>
            )}

            <div className="flex gap-3 flex-wrap">
                <button
                    onClick={handleApprove}
                    disabled={loading !== null}
                    className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-bold text-sm uppercase tracking-wider transition-all disabled:opacity-50"
                >
                    {loading === 'approve' ? 'Aprobando...' : '✅ Aprobar y dar acceso'}
                </button>
                <button
                    onClick={() => setShowReject(!showReject)}
                    disabled={loading !== null}
                    className="bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50 text-red-700 dark:text-red-400 px-5 py-2 rounded-full font-bold text-sm uppercase tracking-wider transition-all disabled:opacity-50"
                >
                    ❌ Rechazar
                </button>
            </div>

            {showReject && (
                <div className="space-y-2">
                    <textarea
                        value={notas}
                        onChange={e => setNotas(e.target.value)}
                        placeholder="Motivo del rechazo (opcional)"
                        rows={2}
                        className="w-full bg-gray-50 dark:bg-black/20 border border-border-light dark:border-border-dark rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-red-400 resize-none"
                    />
                    <button
                        onClick={handleReject}
                        disabled={loading !== null}
                        className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-bold text-sm uppercase tracking-wider transition-all disabled:opacity-50"
                    >
                        {loading === 'reject' ? 'Rechazando...' : 'Confirmar rechazo'}
                    </button>
                </div>
            )}
        </div>
    );
}
