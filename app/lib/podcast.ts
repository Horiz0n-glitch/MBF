
import { directus } from './directus';
import { readItems } from '@directus/sdk';
import { getImageUrl } from './courses';

export interface PodcastItem {
  id: string;
  titulo: string;
  slug: string;
  fecha: string;
  categoria: string;
  imagen: string;
  resumen: string;
  contenido: string;
  autor: string;
  archivo_audio?: string;
  spotify_url?: string;
  youtube_url?: string;
  duracion?: string;
}

export async function getPodcasts(): Promise<PodcastItem[]> {
  try {
    const { adminClient } = await import('./directus');
    const result = await adminClient.request(readItems('noticias', {
      sort: ['-date_created']
    }));
    return result as unknown as PodcastItem[];
  } catch (error) {
    console.error('Error fetching podcasts:', error);
    return [];
  }
}

export async function getPodcastBySlug(slug: string): Promise<PodcastItem | null> {
  try {
    const { adminClient } = await import('./directus');
    const result = await adminClient.request(readItems('noticias', {
      filter: { slug: { _eq: slug } },
      limit: 1
    }));
    return (result[0] as unknown as PodcastItem) || null;
  } catch (error) {
    console.error(`Error fetching podcast with slug ${slug}:`, error);
    return null;
  }
}
