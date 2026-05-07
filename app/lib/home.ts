import { readSingleton } from '@directus/sdk';
import { adminClient } from './directus';

export interface HomePageData {
    // INICIO
    inicio_imagen_principal?: string;
    inicio_texto_fondo?: string;
    inicio_subtitulo?: string;
    inicio_titulo?: string;
    inicio_tarjeta_titulo?: string;
    inicio_tarjeta_descripcion?: string;
    inicio_tarjeta_pie?: string;
    inicio_etiqueta?: string;

    // FILOSOFIA
    filosofia_subtitulo?: string;
    filosofia_descripcion?: string;
    filosofia_caract_1_titulo?: string;
    filosofia_caract_1_desc?: string;
    filosofia_caract_2_titulo?: string;
    filosofia_caract_2_desc?: string;
    filosofia_caract_3_titulo?: string;
    filosofia_caract_3_desc?: string;

    // CURSOS
    cursos_imagen_destacada?: string;
    cursos_etiqueta_flotante?: string;
    cursos_imagen_titulo?: string;
    cursos_imagen_boton?: string;
    cursos_titulo?: string;
    cursos_descripcion?: string;
    cursos_beneficio_1_titulo?: string;
    cursos_beneficio_1_desc?: string;
    cursos_beneficio_2_titulo?: string;
    cursos_beneficio_2_desc?: string;
    cursos_beneficio_3_titulo?: string;
    cursos_beneficio_3_desc?: string;

    // MENTORIAS
    mentorias_imagen?: string;
    mentorias_texto_fondo?: string;
    mentorias_subtitulo?: string;
    mentorias_titulo?: string;
    mentorias_descripcion?: string;
    mentorias_caract_1_titulo?: string;
    mentorias_caract_1_desc?: string;
    mentorias_caract_2_titulo?: string;
    mentorias_caract_2_desc?: string;
    mentorias_boton?: string;
    mentorias_etiqueta_titulo?: string;
    mentorias_etiqueta_desc?: string;

    // ESTADISTICAS
    estadisticas_subtitulo?: string;
    estadisticas_1_valor?: string;
    estadisticas_1_desc?: string;
    estadisticas_2_valor?: string;
    estadisticas_2_desc?: string;
    estadisticas_3_valor?: string;
    estadisticas_3_desc?: string;
}

export async function getHomePageData(): Promise<HomePageData | null> {
    try {
        const result = await adminClient.request(readSingleton('inicio'));
        return result as HomePageData;
    } catch (error) {
        console.warn('Error fetching home page data from Directus (it might not exist yet):', error);
        return null;
    }
}
