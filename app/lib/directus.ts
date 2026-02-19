import { createDirectus, rest, staticToken } from '@directus/sdk';

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055';
const ADMIN_TOKEN = process.env.DIRECTUS_ADMIN_TOKEN || 'WmX7KmV0IYu8uqyJoUnt7lCLRlDO-_9a';

if (!process.env.DIRECTUS_ADMIN_TOKEN) {
    console.warn('[Directus] DIRECTUS_ADMIN_TOKEN not found in environment, using fallback');
}

console.log('[Directus] Connecting to:', DIRECTUS_URL);

// Cliente base para peticiones públicas (o con token de sesión en el cliente)
export const directus = createDirectus(DIRECTUS_URL).with(rest());

// Cliente administrativo para acciones del servidor
export const adminClient = createDirectus(DIRECTUS_URL)
    .with(rest())
    .with(staticToken(ADMIN_TOKEN || ''));

export const getAdminClient = () => adminClient;
