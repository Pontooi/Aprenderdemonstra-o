import React from 'react';
import { SCHOOL_INFO } from '../data/courseData';
import { MessageCircle, MapPin, CheckCircle2, Award, Sparkles, Compass } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b border-[#E8DFD0]">
      {/* Decorative background warmth */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#E5A823]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-[#C52228]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tagline */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs uppercase tracking-wider font-bold text-[#C52228]">
            Curso Presencial de Espanhol
          </span>
          <span className="text-xs text-[#A8A29E]" aria-hidden="true">·</span>
          <span className="text-xs font-medium text-[#78716C]">
            Centro de Juiz de Fora - MG
          </span>
        </div>

        {/* 2-Column Split: Headline + Context / Spanish Emblem Presentation Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#262320] tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
              ¿Qué tal aprender el <span className="text-[#C52228]">segundo idioma</span> más hablado del mundo?
            </h1>

            <p className="text-lg text-[#57534E] leading-relaxed max-w-2xl">
              Aprenda espanhol com fluidez, confiança e vivência cultural. Aulas dinâmicas e acolhedoras na Sala 1002, com o método comunicativo do Professor Leonardo Borges.
            </p>

            {/* Direct WhatsApp Action Box */}
            <div className="bg-[#FFFDF9] border border-[#E8DFD0] rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#262320] uppercase tracking-wider">
                    Inscrição & Informações Rápidas
                  </div>
                  <div className="text-sm text-[#57534E]">
                    Converse diretamente com o professor no WhatsApp
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <a
                  href={SCHOOL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-bold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] rounded-xl shadow-md transition-all text-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Inscrever-se pelo WhatsApp</span>
                </a>

                <a
                  href="#localizacao"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#443F3B] bg-white hover:bg-[#F2E9D8] border border-[#E8DFD0] rounded-xl transition-all"
                >
                  <MapPin className="w-4 h-4 text-[#C52228]" />
                  <span>Ver Localização</span>
                </a>
              </div>
            </div>

            {/* Teacher footnote */}
            <div className="flex items-center gap-3 pt-1 text-xs text-[#78716C]">
              <div className="w-8 h-8 rounded-full bg-[#E8DFD0] flex items-center justify-center text-[#C52228] font-bold shrink-0">
                LGB
              </div>
              <div>
                <span className="font-semibold text-[#262320]">Leonardo Guimarães Borges</span>
                <p>Graduado em Espanhol pela UFJF e Universidade de Salamanca (Espanha)</p>
              </div>
            </div>

          </div>

          {/* Right Presentation Card (Stylized Typographic & Cultural Emblem - No external photos) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border-2 border-[#E8DFD0] shadow-xl space-y-6 relative overflow-hidden">
                {/* Subtle decorative header band */}
                <div className="flex items-center justify-between pb-4 border-b border-[#F2E9D8]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#C52228] uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>¡Ven a Aprender Español!</span>
                  </div>
                  <span className="text-xs font-semibold text-[#D97706]">
                    Juiz de Fora - MG
                  </span>
                </div>

                {/* Cultural Quote & Identity */}
                <div className="space-y-3 py-2 text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#262320] font-display">
                    Espanhol sem complicação, com quem viveu o idioma.
                  </div>
                  <p className="text-sm text-[#57534E] leading-relaxed">
                    Aulas presenciais focadas em conversação, pronúncia autêntica e repertório cultural para viagens, estudos e realizações pessoais.
                  </p>
                </div>

                {/* Highlights checklist */}
                <div className="space-y-3 pt-2 border-t border-[#F2E9D8]">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-[#443F3B]">
                    <CheckCircle2 className="w-4 h-4 text-[#C52228] shrink-0 mt-0.5" />
                    <span>Metodologia participativa e comunicação ativa</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-[#443F3B]">
                    <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                    <span>Formação acadêmica na Espanha (Universidade de Salamanca)</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-[#443F3B]">
                    <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                    <span>Sala própria no coração de Juiz de Fora (Sala 1002)</span>
                  </div>
                </div>

                {/* WhatsApp Quick Link */}
                <div className="pt-2">
                  <a
                    href={SCHOOL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl text-xs font-bold text-[#15803D] bg-[#DCFCE7] hover:bg-[#bbf7d0] transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chamar no WhatsApp: {SCHOOL_INFO.phoneFormatted}</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* 4-Column Feature Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-[#E8DFD0]">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FFFDF9]/60 border border-[#E8DFD0]/80">
            <CheckCircle2 className="w-5 h-5 text-[#C52228] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-[#262320]">100% Presencial</h4>
              <p className="text-xs text-[#78716C]">Aulas participativas com atenção individual.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FFFDF9]/60 border border-[#E8DFD0]/80">
            <Award className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-[#262320]">UFJF & Salamanca</h4>
              <p className="text-xs text-[#78716C]">Formação acadêmica sólida no Brasil e na Espanha.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FFFDF9]/60 border border-[#E8DFD0]/80">
            <Compass className="w-5 h-5 text-[#C52228] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-[#262320]">Imersão Cultural</h4>
              <p className="text-xs text-[#78716C]">Aprenda a língua viva e a cultura dos países hispânicos.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FFFDF9]/60 border border-[#E8DFD0]/80">
            <MapPin className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-[#262320]">Centro de JF</h4>
              <p className="text-xs text-[#78716C]">Av. Barão do Rio Branco, 2872 / Sala 1002.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
