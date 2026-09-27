import type { NextConfig } from "next";

/**
 * Content-Security-Policy.
 *
 * `script-src` precisa de 'unsafe-inline': o Next injeta o payload de
 * hidratação em <script> inline, e a alternativa (nonce por requisição)
 * exige renderização dinâmica — o que jogaria fora a geração estática de
 * todas as páginas. O risco aceito aqui é baixo porque o site não tem
 * formulário, login, entrada de usuário nem conteúdo de terceiros
 * renderizado como HTML: não há vetor de XSS refletido ou armazenado.
 * Se um dia entrar qualquer campo de entrada, isto precisa ser revisto.
 *
 * `style-src` idem, por causa dos estilos inline do Next e do Tailwind.
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  // Miniaturas do YouTube passam pelo otimizador, que devolve do próprio
  // domínio; data: cobre os placeholders embutidos do next/image.
  "img-src 'self' data: https://i.ytimg.com",
  // next/font embute a Geist Mono no próprio domínio — sem CDN de fonte.
  "font-src 'self'",
  "connect-src 'self'",
  // Player do YouTube (nocookie) e o visualizador de PDF local.
  "frame-src 'self' https://www.youtube-nocookie.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  // Não anunciar a stack em todo response.
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          // frame-ancestors já cobre navegadores modernos; mantido para os antigos.
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },

  /*
   * Só vale em desenvolvimento. Quando o site é aberto pelo IP do WSL
   * em vez de localhost, o Next barra os recursos de dev (HMR, chunks,
   * CSS) por cross-origin e a página chega sem estilo nem JavaScript.
   * As faixas abaixo são as que o WSL2 usa; o IP muda a cada reinício,
   * por isso curinga em vez de endereço fixo.
   */
  allowedDevOrigins: ["172.16.*.*", "172.17.*.*", "172.18.*.*", "172.19.*.*",
    "172.20.*.*", "172.21.*.*", "172.22.*.*", "172.23.*.*", "172.24.*.*",
    "172.25.*.*", "172.26.*.*", "172.27.*.*", "172.28.*.*", "172.29.*.*",
    "172.30.*.*", "172.31.*.*", "192.168.*.*"],

  images: {
    // Usado só pela seção "últimos vídeos" (thumbnails do YouTube).
    // Lista fechada de propósito: um padrão aberto transformaria o
    // otimizador num proxy de imagem para qualquer origem.
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" },
    ],
    // SVG remoto continua bloqueado (dangerouslyAllowSVG fica desligado):
    // SVG é executável e viraria vetor de XSS servido do nosso domínio.
  },
};

export default nextConfig;
