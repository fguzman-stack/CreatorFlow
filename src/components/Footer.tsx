// Footer.tsx
// Pie de página para CreatorFlow
// Personaliza los enlaces y redes sociales usando siteConfig

import React from "react";
import { Sparkles } from "lucide-react";
import { siteConfig } from "../config";

// Ejemplo de uso:
// <Footer />

const Footer = () => {
  return (
    <footer className="py-6 px-6 bg-muted text-center mt-12">
      <div className="mb-2 flex justify-center items-center flex-col">
        <Sparkles className="h-7 w-7 text-cyan-500 mb-1" />
      </div>
      <div className="mb-2">
        <a href={siteConfig.creator.social.youtube} className="mx-2" target="_blank" rel="noopener noreferrer">YouTube</a>
        <a href={siteConfig.creator.social.patreon} className="mx-2" target="_blank" rel="noopener noreferrer">Patreon</a>
        <a href={siteConfig.creator.social.twitter} className="mx-2" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} . Todos los derechos reservados.</div>
    </footer>
  );
};

export default Footer; 