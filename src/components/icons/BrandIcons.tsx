import type { SVGProps } from 'react';

/**
 * lucide-react removeu os ícones de marca (YouTube, LinkedIn, Instagram,
 * GitHub) do pacote — implementamos versões simples aqui, no mesmo
 * formato de ícone usado no restante do site (tamanho via prop `size`).
 */
export type IconComponent = (props: SVGProps<SVGSVGElement> & { size?: number }) => React.JSX.Element;

function BaseIcon({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    />
  );
}

export const YoutubeIcon: IconComponent = (props) => (
  <BaseIcon {...props}>
    <rect x="1.5" y="5.5" width="21" height="13" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <path d="M10 8.8v6.4l6-3.2-6-3.2z" />
  </BaseIcon>
);

export const LinkedinIcon: IconComponent = (props) => (
  <BaseIcon {...props}>
    <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="7.5" cy="8" r="1.4" />
    <rect x="6.3" y="10.5" width="2.4" height="7.5" />
    <path d="M11.5 10.5h2.3v1.2c.5-.8 1.4-1.4 2.7-1.4 2 0 3 1.3 3 3.8v4h-2.4v-3.6c0-1.2-.5-1.9-1.5-1.9-1 0-1.7.7-1.7 1.9v3.6h-2.4v-7.6z" />
  </BaseIcon>
);

export const InstagramIcon: IconComponent = (props) => (
  <BaseIcon {...props}>
    <rect x="2.5" y="2.5" width="19" height="19" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="17.2" cy="6.8" r="1.1" />
  </BaseIcon>
);

export const GithubIcon: IconComponent = (props) => (
  <BaseIcon {...props}>
    <path d="M12 2.2c-5.5 0-10 4.5-10 10 0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.7-.1-.3-.5-1.3.1-2.6 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .6 1.3.2 2.3.1 2.6.7.7 1 1.6 1 2.7 0 3.8-2.4 4.6-4.6 4.9.4.3.7.9.7 1.9v2.7c0 .3.2.6.7.5 4-1.3 6.8-5.1 6.8-9.5 0-5.5-4.5-10-10-10z" />
  </BaseIcon>
);
