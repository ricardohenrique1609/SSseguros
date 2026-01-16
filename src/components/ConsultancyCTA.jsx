import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function ConsultancyCTA({ context = "geral" }) {
    const messages = {
        geral: "Olá Valter! Vi o site SS Seguros e preciso de uma consultoria.",
        checklist: "Olá Valter! Reuni a documentação do checklist mas a seguradora negou (ou tenho dúvidas).",
        servico: "Olá Valter! Vi a página de serviços e gostaria de contratar sua consultoria especializada."
    };

    const message = messages[context] || messages.geral;
    const whatsappLink = `https://wa.me/5511995595551?text=${encodeURIComponent(message)}`;

    return (
        <div className="relative rounded-[3rem] overflow-hidden text-center shadow-2xl shadow-indigo-900/20 group transform transition-transform hover:scale-[1.01] duration-500">

            {/* Fundo Gradiente Estilo Gemini */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600" />

            {/* Bolhas de Luz Decorativas */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700 ease-in-out" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400 opacity-20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 p-10 md:p-20 flex flex-col items-center">

                {/* Icone de Vidro */}
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-3xl mb-8 border border-white/20 text-white shadow-lg">
                    <ShieldCheck size={40} />
                </div>

                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                    A Seguradora negou?
                </h3>

                <p className="text-indigo-100 mb-12 max-w-2xl text-lg md:text-xl leading-relaxed font-light opacity-90">
                    Não aceite o "não" como resposta final. A VPSouza analisa tecnicamente seu caso e constrói sua defesa.
                </p>

                <Link
                    href={whatsappLink}
                    target="_blank"
                    className="inline-flex justify-center items-center bg-white text-indigo-700 font-bold py-5 px-10 rounded-full hover:bg-indigo-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 group/btn"
                >
                    <MessageCircle className="mr-3 group-hover/btn:rotate-12 transition-transform duration-300" size={24} />
                    Falar com o Valter
                    <ArrowRight className="ml-2 w-5 h-5 opacity-40 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all duration-300" />
                </Link>
            </div>
        </div>
    );
}