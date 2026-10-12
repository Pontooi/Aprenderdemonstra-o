import React from 'react';
import { SCHOOL_INFO } from '../data/courseData';
import { Instagram, MessageCircle, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#24211E] text-[#D6C7B2] pt-16 pb-12 border-t border-[#3A3530]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3A3530]">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-2xl font-extrabold text-[#FFFDF9] tracking-tight font-display">
              ¡Ven a Aprender Español!
            </h3>
            <p className="text-sm text-[#A8A29E] leading-relaxed max-w-sm">
              Escola de espanhol presencial em Juiz de Fora. Metodologia comunicativa e imersão cultural na Sala 1002 com o Professor Leonardo Borges.
            </p>
            <div className="text-xs text-[#78716C]">
              Docente graduado pela UFJF e Universidade de Salamanca (Espanha).
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FCD34D]">
              Localização & Contato
            </div>
            <ul className="space-y-2 text-sm text-[#A8A29E]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C52228] shrink-0 mt-1" />
                <span>
                  {SCHOOL_INFO.address.street}, {SCHOOL_INFO.address.suite}
                  <br />
                  Centro · {SCHOOL_INFO.address.city} - {SCHOOL_INFO.address.state}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                <a 
                  href={`https://wa.me/${SCHOOL_INFO.phoneRaw}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {SCHOOL_INFO.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#E1306C] shrink-0" />
                <a
                  href={SCHOOL_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram: {SCHOOL_INFO.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FCD34D]">
              Navegação
            </div>
            <ul className="space-y-2 text-sm text-[#A8A29E]">
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">Sobre o Curso</a>
              </li>
              <li>
                <a href="#professor" className="hover:text-white transition-colors">O Professor</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">Como Chegar (Sala 1002)</a>
              </li>
              <li>
                <a href="#inscricao" className="hover:text-white transition-colors">Inscrição via WhatsApp</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716C]">
          <div>
            © {new Date().getFullYear()} ¡Ven a Aprender Español! · Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-stone-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5A823]"></span>
            <span>Site de demonstração desenvolvido para apresentação do curso</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
