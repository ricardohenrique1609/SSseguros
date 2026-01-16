'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { audienceCards } from '../../../data/content';
import ConsultancyCTA from '../../../components/ConsultancyCTA';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

export default function ServicePage() {
    const params = useParams();
    const serviceData = audienceCards.find(card => card.id === params.id);

    if (!serviceData) {
        return <div className="min-h-screen bg-white flex items-center justify-center text-slate-400 font-medium">Serviço não encontrado.</div>;
    }

    const whatsappUrl = `https://wa.me/5511995595551?text=${encodeURIComponent(`Olá Valter, vi a página sobre ${serviceData.title} e gostaria de contratar.`)}`;

    return (
        <main className="min-h-screen bg-slate-50 selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">

            {/* Background Glows (Contained) */}
            <div className="absolute top-0 right-0 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-gradient-to-b from-indigo-100/40 to-transparent rounded-full blur-[80px] md:blur-[120px] pointer-events-none -z-10" />

            {/* HERO SECTION */}
            <section className="pt-28 pb-16 px-5 md:pt-36 md:px-6">
                <div className="max-w-6xl mx-auto relative z-10">
                    <Link href="/" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-indigo-600 mb-8 md:mb-12 transition-colors px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md">
                        <ArrowLeft size={16} className="mr-2" />
                        Voltar
                    </Link>

                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-start">

                        {/* Texto de Venda */}
                        <div className="flex-1">
                            <span className="text-indigo-600 font-bold tracking-wider text-[10px] md:text-xs uppercase mb-4 md:mb-6 block bg-indigo-50 w-fit px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-indigo-100">
                                {serviceData.title}
                            </span>

                            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-[1.1] tracking-tight text-slate-900">
                                {serviceData.heroTitle}
                            </h1>

                            <p className="text-base md:text-xl text-slate-500 leading-relaxed mb-8 md:mb-12 max-w-xl">
                                {serviceData.heroDesc}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5 items-start">
                                <Link
                                    href={whatsappUrl}
                                    target="_blank"
                                    className="w-full sm:w-auto group relative inline-flex justify-center items-center bg-slate-900 text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-base md:text-lg transition-all shadow-xl shadow-indigo-900/20 hover:scale-105 hover:shadow-indigo-900/30 overflow-hidden"
                                >
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <span className="relative flex items-center gap-2">
                                        <Sparkles size={18} className="text-indigo-200" />
                                        Falar com Especialista
                                    </span>
                                </Link>
                            </div>

                            <p className="mt-6 md:mt-8 text-xs md:text-sm text-slate-400 font-medium flex items-center gap-2 pl-2">
                                <span className="flex h-2.5 w-2.5 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                </span>
                                Disponível agora no WhatsApp
                            </p>
                        </div>

                        {/* CARD "Painel de Vidro" (Ajustado para Mobile) */}
                        <div className="w-full lg:w-[420px] shrink-0">
                            {/* No mobile, removemos o sticky para não ocupar a tela toda ao rolar */}
                            <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] p-6 md:p-10 border border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] lg:sticky lg:top-32">
                                <div className="flex items-center gap-4 mb-6 md:mb-8 pb-6 md:pb-8 border-b border-slate-100">
                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-3 rounded-2xl text-indigo-600 border border-indigo-100">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-lg md:text-xl">O que está incluso:</h3>
                                </div>

                                <ul className="space-y-4 md:space-y-6">
                                    {serviceData.features?.map((feature, index) => (
                                        <li key={index} className="flex items-start text-sm md:text-base lg:text-lg">
                                            <div className="mt-1.5 mr-3 md:mr-4 w-5 h-5 md:w-6 md:h-6 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                                                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-indigo-500" />
                                            </div>
                                            <span className="text-slate-600 font-medium leading-snug">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-16 md:py-24 px-5 md:px-6 border-t border-slate-200 bg-white">
                <div className="max-w-4xl mx-auto">
                    <ConsultancyCTA context="servico" />
                </div>
            </section>
        </main>
    );
}