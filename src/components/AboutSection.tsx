import React from 'react';
import { SCHOOL_INFO } from '../data/courseData';
import { MessageSquare, BookOpen, Building, CheckCircle2, MessageCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-16 lg:py-24 bg-[#F5EFE0]/50 border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-wider font-bold text-[#C52228] mb-2">
            Sobre o Nosso Curso
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#262320] tracking-tight">
            Metodologia comunicativa e imersão real no espanhol
          </h2>
          <p className="mt-3 text-base text-[#57534E] leading-relaxed">
            Na <strong>¡Ven a Aprender Español!</strong>, o objetivo é fazer você se comunicar com naturalidade. Aulas presenciais na Sala 1002 com foco em prática, conversação e aspectos culturais.
          </p>
        </div>

        {/* 4 Pillars Grid (Pure typography & icons - no photos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SCHOOL_INFO.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF9] rounded-2xl border border-[#E8DFD0] p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-[#D6C7B2] transition-colors"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] border border-[#E8DFD0] flex items-center justify-center text-[#C52228] font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-[#262320]">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#57534E] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-2 text-xs font-semibold text-[#D97706] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Diferencial da escola</span>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Callout */}
        <div className="mt-12 bg-[#FFFDF9] border border-[#E8DFD0] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-[#262320]">
              Quer saber sobre níveis, vagas e combinar seu início?
            </h4>
            <p className="text-sm text-[#57534E]">
              Fale diretamente com o Professor Leonardo no WhatsApp para tirar dúvidas e alinhar sua matrícula.
            </p>
          </div>
          <a
            href={SCHOOL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20ba59] shadow-sm transition-all whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
