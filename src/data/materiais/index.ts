import type { CorpoMaterial } from '@/data/materiais';
import { corpo as checklist } from '@/data/materiais/checklist-curriculo-internacional';
import { corpo as linkedin } from '@/data/materiais/linkedin-para-recrutador-gringo';
import { corpo as mapa } from '@/data/materiais/mapa-competencias-sre';

/**
 * Só os materiais GRATUITOS têm corpo aqui. Os que vêm com a mentoria
 * ficam em docs/materiais-mentoria/ (Markdown, fora do bundle): não
 * faria sentido publicar de graça, no código do site, o que é vendido.
 */
const corpos: Record<string, CorpoMaterial> = {
  'checklist-curriculo-internacional': checklist,
  'linkedin-para-recrutador-gringo': linkedin,
  'mapa-competencias-sre': mapa,
};

export function getCorpoMaterial(slug: string): CorpoMaterial | undefined {
  return corpos[slug];
}
