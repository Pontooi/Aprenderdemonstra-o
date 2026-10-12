import React from 'react';
import { SCHOOL_INFO } from '../data/courseData';
import { GraduationCap, Award, Globe, HeartHandshake, MessageCircle } from 'lucide-react';

export const TeacherSection: React.FC = () => {
  return (
    <section id="professor" className="py-16 lg:py-24 border-b border-[#E8DFD0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Teacher Academic Crest Card (No image as requested, ready for future photo) */}
          <div className="lg:col-span-5">
            <div className="bg-[#FFFDF9] border-2 border-[#E8DFD0] rounded-3xl p-8 shadow-lg space-y-6 text-center">
              
              <div className="w-24 h-24 rounded-full bg-[#FEE2E2] text-[#C52228] mx-auto flex items-center justify-center font-extrabold text-3xl font-display shadow-inner">
                LGB
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-[#262320]">
                  {SCHOOL_INFO.teacher.name}
                </h3>
                <p className="text-xs font-bold text-[#C52228] uppercase tracking-wider mt-1">
                  Professor & Fundador
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#E8DFD0] space-y-2 text-xs text-[#57534E]">
                <div className="font-bold text-[#262320]">Universidade Federal de Juiz de Fora (UFJF)</div>
                <div className="text-[#A8A29E]">·</div>
                <div className="font-bold text-[#D97706]">Universidade de Salamanca (Espanha)</div>
              </div>

              <a
                href={SCHOOL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-bold text-xs text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar com o Professor</span>
              </a>

            </div>
          </div>

          {/* Teacher Credentials & Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-[#C52228] mb-2">
                Conheça seu Professor
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#262320] tracking-tight">
                Aprenda com quem estudou e vivenciou a língua em Salamanca
              </h2>
            </div>

            <p className="text-base text-[#57534E] leading-relaxed">
              {SCHOOL_INFO.teacher.bio}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FFFDF9] border border-[#E8DFD0]">
                <div className="p-2 rounded-lg bg-[#FEE2E2] text-[#C52228] shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#262320]">Graduação pela UFJF</h4>
                  <p className="text-xs text-[#78716C]">Licenciatura plena em Letras/Espanhol pela Universidade Federal de Juiz de Fora.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FFFDF9] border border-[#E8DFD0]">
                <div className="p-2 rounded-lg bg-[#FEF3C7] text-[#D97706] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#262320]">Universidade de Salamanca (Espanha)</h4>
                  <p className="text-xs text-[#78716C]">Imersão acadêmica e aperfeiçoamento didático no berço da gramática da língua espanhola.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FFFDF9] border border-[#E8DFD0]">
                <div className="p-2 rounded-lg bg-[#DCFCE7] text-[#15803D] shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#262320]">Didática Acolhedora e Personalizada</h4>
                  <p className="text-xs text-[#78716C]">Atenção dedicada a cada ritmo de aprendizagem, com foco em destravar a conversação prática.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FFFDF9] border border-[#E8DFD0]">
                <div className="p-2 rounded-lg bg-[#E0E7FF] text-[#4338CA] shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#262320]">Cultura e Vivência Prática</h4>
                  <p className="text-xs text-[#78716C]">Conexão autêntica com expressões, costumes, gastronomia e tradições do mundo hispânico.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-[#78716C]">
              <span>Av. Barão do Rio Branco, 2872 / Sala 1002</span>
              <span>·</span>
              <span>Juiz de Fora - MG</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
