import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { audienceCards, checklists } from '../data/content';
import Link from 'next/link';
import { Sparkles, ArrowRight, Shield, FileText, ChevronRight } from 'lucide-react';

export default function Home() {
  const whatsappHelpLink = "https://wa.me/5511995595551?text=Ol%C3%A1%2C%20vi%20o%20site%20e%20preciso%20de%20ajuda%20t%C3%A9cnica.";

  return (
    <main className="min-h-screen overflow-x-hidden selection:bg-indigo-500 selection:text-white">

      {/* --- LAYER DE LUZ DE FUNDO (Ajustado para Mobile) --- */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-white/80" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] md:h-[800px] pointer-events-none -z-10 opacity-60">
        <div className="absolute top-[-50px] left-[-20%] md:left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-400/20 rounded-full blur-[80px] md:blur-[120px] mix-blend-multiply animate-pulse" />
        <div className="absolute top-[50px] right-[-20%] md:right-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-indigo-400/20 rounded-full blur-[80px] md:blur-[120px] mix-blend-multiply" />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-5 md:px-6 relative">
        <div className="max-w-5xl mx-auto text-center relative z-10">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-indigo-100 shadow-[0_2px_10px_rgba(99,102,241,0.1)] mb-6 md:mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-xs md:text-sm font-semibold text-slate-600 tracking-wide uppercase">
              Consultoria Especializada
            </span>
          </div>

          {/* Título Responsivo */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 md:mb-8 text-slate-900 leading-[1.1]">
            Imparcialidade <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 animate-gradient block md:inline">
              Inteligente.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-slate-500 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed font-light px-2">
            Alinhamos expectativas entre Segurados e Seguradoras. <br className="hidden md:block" />
            Menos conflito, mais técnica.
          </p>

          {/* Botões Empilhados no Mobile */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-2">
            <Link
              href={whatsappHelpLink}
              target="_blank"
              className="group relative bg-slate-900 text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-semibold overflow-hidden transition-transform hover:scale-105 shadow-xl shadow-indigo-900/20 active:scale-95"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative flex items-center justify-center gap-2">
                <Sparkles size={18} className="text-indigo-200" /> Preciso de Ajuda
              </span>
            </Link>

            <Link
              href="#servicos"
              className="bg-white/80 backdrop-blur-sm text-slate-700 border border-slate-200 px-8 py-4 md:px-10 md:py-5 rounded-full font-semibold hover:bg-white hover:border-indigo-200 transition-all shadow-sm hover:shadow-lg active:scale-95 flex items-center justify-center"
            >
              Conheça as Soluções
            </Link>
          </div>
        </div>
      </section>

      {/* --- CARDS FLUTUANTES --- */}
      <section id="servicos" className="px-5 md:px-6 pb-20 md:pb-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {audienceCards.map((card) => (
              <ServiceCard
                key={card.id}
                title={card.title}
                description={card.description}
                iconName={card.icon}
                link={card.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- CHECKLISTS --- */}
      <section className="py-20 md:py-32 px-5 md:px-6 bg-white/50 border-t border-slate-100 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <div className="text-center md:text-left mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Ferramentas Rápidas</h2>
            <p className="text-slate-500 text-base md:text-lg max-w-lg mx-auto md:mx-0">
              Evite negativas por falta de documentos. Acesse nossos checklists oficiais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {Object.entries(checklists).map(([id, data]) => (
              <Link
                key={id}
                href={`/checklist/${id}`}
                className="group relative bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)] transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shrink-0">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg md:text-xl mb-1 group-hover:text-indigo-600 transition-colors leading-tight">{data.title}</h3>
                      <span className="text-slate-400 text-xs md:text-sm font-medium">Ver documentos</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 group-hover:border-indigo-100 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all shrink-0">
                    <ChevronRight size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- RODAPÉ --- */}
      <footer className="py-10 text-center border-t border-slate-100 bg-white/80 px-4">
        <div className="flex items-center justify-center gap-2 text-slate-900 font-bold text-lg mb-2">
          <Shield className="text-indigo-600" size={20} />
          SS Seguros
        </div>
        <p className="text-slate-400 text-xs md:text-sm">
          © 2026 VPSouza Consultoria. Todos os direitos reservados.
        </p>
      </footer>

    </main>
  );
}