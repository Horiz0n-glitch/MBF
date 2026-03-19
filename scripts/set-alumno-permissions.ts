import { createDirectus, rest, staticToken, createItems, createItem } from '@directus/sdk';

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055';
const ADMIN_TOKEN = 'WmX7KmV0IYu8uqyJoUnt7lCLRlDO-_9a';

const client = createDirectus(DIRECTUS_URL).with(rest()).with(staticToken(ADMIN_TOKEN));

async function setPermissions() {
    const roleId = 'c6d89d18-ac96-4281-8567-f88e36838980'; // Alumno

    try {
        console.log('Asignando permisos para accesos_cursos...');
        await client.request(createItem('directus_permissions' as any, {
            role: roleId,
            collection: 'accesos_cursos',
            action: 'read',
            permissions: { usuario: { _eq: '$CURRENT_USER' } },
            fields: ['*']
        }));

        console.log('Asignando permisos para compras (create)...');
        await client.request(createItem('directus_permissions' as any, {
            role: roleId,
            collection: 'compras',
            action: 'create',
            permissions: {},
            fields: ['*']
        }));

        console.log('Asignando permisos para compras (read)...');
        await client.request(createItem('directus_permissions' as any, {
            role: roleId,
            collection: 'compras',
            action: 'read',
            permissions: { usuario: { _eq: '$CURRENT_USER' } },
            fields: ['*']
        }));

        console.log('Permisos asignados correctamente.');
    } catch (e: any) {
        console.error('Error asignando permisos:', JSON.stringify(e?.errors || e, null, 2));
    }
}

setPermissions();
