import React from 'react';
import { SCHOOL_INFO } from '../data/courseData';
import { Instagram, ExternalLink, Sparkles, Compass, BookOpen, Users } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-16 lg:py-24 bg-[#FAF6EE] border-b border-[#E8DFD0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7F3] text-[#BE185D] text-xs font-bold uppercase tracking-wider mb-4">
          <Instagram className="w-3.5 h-3.5" />
          <span>Comunidade & Redes Sociais</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#262320] tracking-tight">
          Acompanhe no Instagram
        </h2>

        <p className="mt-4 text-base text-[#57534E] max-w-xl mx-auto leading-relaxed">
          Siga nosso perfil oficial para ver novidades da escola, conteúdos didáticos, dicas do idioma e vivências culturais.
        </p>

        {/* Profile Card */}
        <div className="mt-8 bg-[#FFFDF9] border border-[#E8DFD0] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6 max-w-xl mx-auto">
          
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] text-white flex items-center justify-center mx-auto shadow-md">
            <Instagram className="w-10 h-10" />
          </div>

          <div>
            <h3 className="text-xl font-extrabold text-[#262320]">
              {SCHOOL_INFO.instagramHandle}
            </h3>
            <p className="text-xs text-[#78716C] mt-1">
              Perfil oficial da escola ¡Ven a Aprender Español! em Juiz de Fora
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 py-3 border-y border-[#F2E9D8] text-center text-xs text-[#57534E]">
            <div className="p-2 rounded-xl bg-[#FAF6EE]">
              <div className="font-bold text-[#262320]">Dicas</div>
              <div className="text-[11px] text-[#78716C]">Vocabulário</div>
            </div>
            <div className="p-2 rounded-xl bg-[#FAF6EE]">
              <div className="font-bold text-[#262320]">Cultura</div>
              <div className="text-[11px] text-[#78716C]">Hispânica</div>
            </div>
            <div className="p-2 rounded-xl bg-[#FAF6EE]">
              <div className="font-bold text-[#262320]">Vivências</div>
              <div className="text-[11px] text-[#78716C]">Comunidade</div>
            </div>
          </div>

          <div>
            <a
              href={SCHOOL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#E1306C] via-[#FD1D1D] to-[#F56040] hover:opacity-95 shadow-md transition-all"
            >
              <Instagram className="w-4 h-4" />
              <span>Acessar {SCHOOL_INFO.instagramHandle}</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
