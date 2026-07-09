import { Download, ExternalLink } from 'lucide-react';
import { PillButton } from '@/components/ui/PillButton';

function isLocalPath(src: string) {
  return src.startsWith('/');
}

export function PdfViewer({ src, titulo }: { src: string; titulo: string }) {
  const local = isLocalPath(src);

  return (
    <div className="space-y-3">
      {local ? (
        <div className="aspect-[3/4] w-full overflow-hidden rounded-lg border border-border bg-muted/5 sm:aspect-video">
          <iframe
            src={`${src}#toolbar=0`}
            title={`Slides: ${titulo}`}
            loading="lazy"
            className="h-full w-full"
          />
        </div>
      ) : null}
      <PillButton
        href={src}
        icon={local ? Download : ExternalLink}
        label={local ? 'Baixar slides' : 'Ver slides'}
        external={!local}
        download={local}
      />
    </div>
  );
}
