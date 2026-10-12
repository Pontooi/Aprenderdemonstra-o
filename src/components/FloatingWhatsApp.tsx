import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/courseData';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const directLink = `https://wa.me/${SCHOOL_INFO.phoneRaw}?text=${encodeURIComponent('¡Hola, Professor Leonardo! Vim pelo site e gostaria de saber mais sobre as turmas presenciais de espanhol.')}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-end flex-col gap-2 pointer-events-auto">
      
      {/* Tooltip bubble on desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-[#262320] px-3.5 py-2 rounded-xl shadow-xl border border-[#E8DFD0] text-xs font-semibold animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
          <span>Falar no WhatsApp com o Professor</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#A8A29E] hover:text-[#262320] ml-1 p-0.5 rounded"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={directLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/40 transition-all group"
      >
        <MessageCircle className="w-7 h-7 transition-transform group-hover:scale-110" />
      </a>
    </div>
  );
};
