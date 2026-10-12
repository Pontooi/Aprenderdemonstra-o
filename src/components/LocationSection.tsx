import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/courseData';
import { MapPin, Navigation, Copy, Check, ExternalLink, Building2, Bus, Car } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const fullAddress = `${SCHOOL_INFO.address.street}, ${SCHOOL_INFO.address.suite}, ${SCHOOL_INFO.address.city} - ${SCHOOL_INFO.address.state}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" className="py-16 lg:py-24 bg-[#FAF6EE] border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-wider font-bold text-[#C52228] mb-2 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>Fácil Acesso no Coração da Cidade</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#262320] tracking-tight">
            Nossa Localização em Juiz de Fora
          </h2>
          <p className="mt-3 text-base text-[#57534E] leading-relaxed">
            Estamos situados no ponto mais acessível do Centro de Juiz de Fora, na Avenida Barão do Rio Branco, com total comodidade e segurança.
          </p>
        </div>

        {/* 2-Column Grid: Address Details + Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 bg-[#FFFDF9] border border-[#E8DFD0] rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm">
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FEE2E2] text-[#C52228] flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#262320]">
                    Edifício Comercial
                  </h3>
                  <p className="text-xs font-semibold text-[#C52228]">
                    {SCHOOL_INFO.address.suite}
                  </p>
                </div>
              </div>

              {/* Address string display */}
              <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#E8DFD0] space-y-1">
                <div className="text-xs text-[#78716C] font-semibold uppercase tracking-wider">
                  Endereço Completo
                </div>
                <div className="text-base font-bold text-[#262320] leading-snug">
                  {SCHOOL_INFO.address.street}
                </div>
                <div className="text-sm text-[#57534E]">
                  {SCHOOL_INFO.address.suite}
                </div>
                <div className="text-sm text-[#57534E]">
                  {SCHOOL_INFO.address.city} - {SCHOOL_INFO.address.state}
                </div>
                <div className="text-xs text-[#A8A29E] pt-1">
                  CEP: {SCHOOL_INFO.address.zip}
                </div>
              </div>

              {/* Copy address & Google Maps buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  onClick={handleCopy}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-[#FAF6EE] hover:bg-[#F2E9D8] text-[#262320] border border-[#D6C7B2] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#15803D]" />
                      <span className="text-[#15803D]">Endereço Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#78716C]" />
                      <span>Copiar Endereço</span>
                    </>
                  )}
                </button>

                <a
                  href={SCHOOL_INFO.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-[#C52228] hover:bg-[#a61b20] text-white transition-colors shadow-sm"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Abrir Rota no Maps</span>
                  <ExternalLink className="w-3 h-3 opacity-75" />
                </a>
              </div>

              {/* Arrival Tips */}
              <div className="space-y-3 pt-3 border-t border-[#F2E9D8]">
                <div className="flex items-start gap-3 text-xs text-[#57534E]">
                  <Bus className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#262320]">Transporte Público:</strong> Paradas de ônibus de todas as linhas de Juiz de Fora na porta ou a menos de 50m do prédio.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-[#57534E]">
                  <Car className="w-4 h-4 text-[#4D5D2E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#262320]">Estacionamento:</strong> Diversos estacionamentos rotativos na própria Av. Rio Branco e ruas transversais.
                  </div>
                </div>
              </div>

            </div>

            <div className="p-3.5 rounded-xl bg-[#FEF3C7]/60 border border-[#FDE68A] text-xs text-[#92400E]">
              <strong>Dica de Chegada:</strong> Ao entrar no edifício, identifique-se na portaria e suba pelo elevador até o 10º andar (Sala 1002).
            </div>

          </div>

          {/* Right Interactive / Visual Map */}
          <div className="lg:col-span-7 bg-[#FFFDF9] border border-[#E8DFD0] rounded-3xl overflow-hidden shadow-sm flex flex-col">
            
            {/* Top Map Bar */}
            <div className="px-6 py-4 bg-[#FAF6EE] border-b border-[#E8DFD0] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-[#262320]">
                <MapPin className="w-4 h-4 text-[#C52228]" />
                <span>Juiz de Fora · Centro Comercial</span>
              </div>
              <a
                href={SCHOOL_INFO.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#C52228] hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Ver no Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Google Map iframe */}
            <div className="w-full flex-1 min-h-[380px] relative bg-stone-200">
              <iframe
                title="Localização da Escola ¡Ven a Aprender Español! em Juiz de Fora"
                src="https://maps.google.com/maps?q=Av.+Bar%C3%A3o+do+Rio+Branco,+2872+-+Centro,+Juiz+de+Fora+-+MG&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Bottom Map Note */}
            <div className="p-4 bg-white border-t border-[#E8DFD0] flex items-center justify-between text-xs text-[#78716C]">
              <span>Av. Barão do Rio Branco, 2872 / Sala 1002 - Centro</span>
              <span className="font-semibold text-[#C52228]">Atendimento Presencial</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
