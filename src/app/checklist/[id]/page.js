'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { checklists } from '../../../data/content';
import ConsultancyCTA from '../../../components/ConsultancyCTA';
import Link from 'next/link';
import { FileText, ArrowLeft, Check, HelpCircle, Shield } from 'lucide-react';

export default function ChecklistPage() {
    const params = useParams();
    const checklistData = checklists[params.id];

    if (!checklistData) {
        return <div className="min-h-screen bg-white flex items-center justify-center text-slate-400 font-medium">Checklist não encontrado.</div>;
    }

    const whatsappMsg = `Olá Valter, estou vendo a lista de documentos para ${checklistData.title} e tenho dúvidas.`;
    const whatsappLink = `https://wa.me/5511995595551?text=${encodeURIComponent(whatsappMsg)}`;

    return (
        <main className="min-h-screen bg-slate-50 selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">

            {/* Background Glow */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-400/10 rounded-full blur-[80px] md:blur-[120px] mix-blend-multiply" />
            </div>

            {/* HEADER */}
            <section className="pt-28 pb-10 px-5 md:pt-32 md:pb-12 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <Link href="/" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-indigo-600 mb-6 md:mb-8 transition-colors px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md">
                        <ArrowLeft size={16} className="mr-2" />
                        Voltar
                    </Link>

                    <div className="flex flex-col gap-4 md:gap-6">
                        <div className="inline-flex self-start items-center gap-2 text-indigo-600 bg-white px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wide border border-indigo-100 shadow-sm">
                            <Shield size={14} /> Documentação Oficial
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                            {checklistData.title}
                        </h1>

                        <p className="text-slate-500 text-base md:text-xl leading-relaxed max-w-2xl">
                            Evite pendências. Reúna exatamente estes itens para garantir a regulação rápida do seu sinistro.
                        </p>
                    </div>
                </div>
            </section>

            {/* LISTA */}
            <section className="pb-20 px-5 md:pb-24 md:px-6">
                <div className="max-w-4xl mx-auto">

                    <div className="space-y-3 md:space-y-4">
                        {checklistData.items.map((item, index) => (
                            <div key={index} className="group flex items-start md:items-center gap-4 md:gap-6 p-5 md:p-8 rounded-3xl bg-white border border-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.15)] hover:border-indigo-100 transition-all duration-300">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300 mt-1 md:mt-0">
                                    <Check size={16} className="text-white stroke-[3]" />
                                </div>
                                <span className="text-slate-700 font-medium text-base md:text-xl leading-snug group-hover:text-indigo-900 transition-colors">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* CARD DE DÚVIDA (Empilhado no Mobile) */}
                    <div className="mt-10 md:mt-12 p-1 rounded-[2.5rem] bg-gradient-to-br from-white to-indigo-50 border border-white shadow-xl shadow-indigo-100/50">
                        <div className="bg-white/50 backdrop-blur-sm rounded-[2.3rem] p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8 items-center text-center md:text-left">
                            <div className="p-4 md:p-5 bg-white rounded-3xl text-indigo-500 shadow-sm border border-slate-100">
                                <HelpCircle size={28} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-slate-900 font-bold text-lg md:text-xl mb-2">Faltou algum documento?</h3>
                                <p className="text-slate-500 text-sm md:text-base">
                                    Se a seguradora pediu algo extra ou se você não consegue obter um item, fale com o Valter.
                                </p>
                            </div>
                            <Link
                                href={whatsappLink}
                                target="_blank"
                                className="w-full md:w-auto whitespace-nowrap px-8 py-4 rounded-full bg-indigo-600 text-white font-bold text-sm shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 active:scale-95 transition-all flex justify-center"
                            >
                                Tirar dúvida no WhatsApp
                            </Link>
                        </div>
                    </div>

                    {/* CTA FINAL */}
                    <div className="mt-16 md:mt-20">
                        <ConsultancyCTA context="checklist" />
                    </div>

                </div>
            </section>
        </main>
    );
}