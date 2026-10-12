import React from 'react';

export const Watermark: React.FC = () => {
  return (
    <>
      {/* Discreet floating watermark badge */}
      <div 
        className="fixed bottom-4 left-4 z-40 select-none pointer-events-auto bg-[#1C1917]/90 text-[#F5F2EB] backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-lg flex items-center gap-2 text-xs font-medium tracking-wide"
        title="Este é um site de demonstração desenvolvido para a escola de idiomas ¡Ven a Aprender Español!"
      >
        <span className="w-2 h-2 rounded-full bg-[#E5A823]" aria-hidden="true"></span>
        <span>Site de demonstração</span>
      </div>

      {/* Very subtle repeating diagonal watermark text in background (non-intrusive) */}
      <div 
        className="fixed inset-0 pointer-events-none select-none z-30 overflow-hidden opacity-[0.035] flex items-center justify-center rotate-[-25deg]"
        aria-hidden="true"
      >
        <div className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-stone-900 whitespace-nowrap text-center space-y-24">
          <div>SITE DE DEMONSTRAÇÃO · ¡VEN A APRENDER ESPAÑOL!</div>
          <div>SITE DE DEMONSTRAÇÃO · JUIZ DE FORA - MG</div>
          <div>SITE DE DEMONSTRAÇÃO · ¡VEN A APRENDER ESPAÑOL!</div>
        </div>
      </div>
    </>
  );
};
