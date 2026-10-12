import React from 'react';
import { SCHOOL_INFO } from '../data/courseData';
import { MessageCircle, ExternalLink, ShieldCheck, Phone } from 'lucide-react';

export const EnrollmentSection: React.FC = () => {
  return (
    <section id="inscricao" className="py-16 lg:py-24 bg-[#FFFDF9] border-b border-[#E8DFD0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCFCE7] text-[#15803D] text-xs font-bold uppercase tracking-wider mb-4">
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Inscrição Rápida & Sem Burocracia</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#262320] tracking-tight">
          Faça sua Inscrição pelo WhatsApp
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#57534E] max-w-2xl mx-auto leading-relaxed">
          Tire dúvidas sobre turmas, níveis disponíveis e confirme sua participação diretamente com o Professor Leonardo Borges pelo WhatsApp.
        </p>

        {/* Big WhatsApp Card */}
        <div className="mt-10 bg-[#FAF6EE] border-2 border-[#E8DFD0] rounded-3xl p-8 sm:p-12 shadow-md space-y-6 max-w-2xl mx-auto">
          
          <div className="w-20 h-20 rounded-2xl bg-[#25D366] text-white flex items-center justify-center mx-auto shadow-lg shadow-[#25D366]/20">
            <MessageCircle className="w-10 h-10" />
          </div>

          <div className="space-y-1">
            <div className="text-xs text-[#78716C] font-bold uppercase tracking-wider">
              WhatsApp Oficial do Curso
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#262320]">
              {SCHOOL_INFO.phoneFormatted}
            </div>
            <div className="text-xs text-[#78716C]">
              Atendimento presencial na Sala 1002 · Juiz de Fora - MG
            </div>
          </div>

          <div className="pt-2">
            <a
              href={SCHOOL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] rounded-xl shadow-lg shadow-[#25D366]/20 transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chamar no WhatsApp e Inscrever-se</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-[#78716C] pt-2 border-t border-[#E8DFD0]">
            <ShieldCheck className="w-4 h-4 text-[#15803D]" />
            <span>Conversa direta com o professor responsável</span>
          </div>

        </div>

      </div>
    </section>
  );
};
