import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/courseData';
import { MessageCircle, Menu, X, Instagram } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF6EE]/95 backdrop-blur-md border-b border-[#E8DFD0] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <a 
            href="#" 
            className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#C52228] whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity font-display"
          >
            ¡Ven a Aprender Español!
          </a>

          {/* Zone 2: 4 single-line clean navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#443F3B]">
            <a 
              href="#sobre" 
              className="hover:text-[#C52228] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Sobre o Curso
            </a>
            <a 
              href="#professor" 
              className="hover:text-[#C52228] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              O Professor
            </a>
            <a 
              href="#localizacao" 
              className="hover:text-[#C52228] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Localização
            </a>
            <a 
              href="#instagram" 
              className="hover:text-[#C52228] transition-colors whitespace-nowrap shrink-0 py-1 flex items-center gap-1.5"
            >
              <Instagram className="w-4 h-4 text-[#C52228]" />
              <span>Instagram</span>
            </a>
          </nav>

          {/* Zone 3: 1 primary action - WhatsApp */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={SCHOOL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] rounded-xl shadow-sm transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inscrição via WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={SCHOOL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-[#25D366] rounded-lg sm:hidden"
              aria-label="Abrir WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#443F3B] hover:text-[#C52228] rounded-lg focus:outline-none"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8DFD0] bg-[#FAF6EE] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2">
            <a
              href="#sobre"
              onClick={handleNavClick}
              className="px-3 py-2.5 rounded-lg text-base font-medium text-[#443F3B] hover:bg-[#F2E9D8] hover:text-[#C52228]"
            >
              Sobre o Curso
            </a>
            <a
              href="#professor"
              onClick={handleNavClick}
              className="px-3 py-2.5 rounded-lg text-base font-medium text-[#443F3B] hover:bg-[#F2E9D8] hover:text-[#C52228]"
            >
              O Professor
            </a>
            <a
              href="#localizacao"
              onClick={handleNavClick}
              className="px-3 py-2.5 rounded-lg text-base font-medium text-[#443F3B] hover:bg-[#F2E9D8] hover:text-[#C52228]"
            >
              Localização (Sala 1002)
            </a>
            <a
              href="#instagram"
              onClick={handleNavClick}
              className="px-3 py-2.5 rounded-lg text-base font-medium text-[#443F3B] hover:bg-[#F2E9D8] hover:text-[#C52228] flex items-center gap-2"
            >
              <Instagram className="w-4 h-4 text-[#C52228]" />
              <span>Instagram @venaaprenderespanol</span>
            </a>
          </nav>
          <div className="pt-2 border-t border-[#E8DFD0]">
            <a
              href={SCHOOL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-base font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow-sm"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Inscrição via WhatsApp</span>
            </a>
            <p className="text-center text-xs text-[#78716C] mt-2">
              Atendimento direto: {SCHOOL_INFO.phoneFormatted}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
