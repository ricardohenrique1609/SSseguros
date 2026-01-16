import React from 'react';
import Link from 'next/link';
import { Shield, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-300 py-12 px-6 border-t border-slate-900">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">

                {/* Coluna 1: Sobre */}
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 mb-4 text-white">
                        <Shield className="text-blue-600 fill-blue-600/20" />
                        <span className="text-xl font-bold">SS Seguros</span>
                    </div>
                    <p className="leading-relaxed text-slate-500 text-sm max-w-sm">
                        Portal técnico e imparcial focado em alinhar expectativas e reduzir conflitos no mercado de seguros. Uma iniciativa VPSouza Consultoria.
                    </p>
                </div>

                {/* Coluna 2: Links Rápidos */}
                <div>
                    <h4 className="text-white font-bold mb-4">Ferramentas</h4>
                    <ul className="space-y-3 text-sm text-slate-400">
                        <li><Link href="/checklist/colisao" className="hover:text-blue-400 transition">Checklist Colisão</Link></li>
                        <li><Link href="/checklist/roubo" className="hover:text-blue-400 transition">Checklist Roubo</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition">Normas SUSEP</Link></li>
                    </ul>
                </div>

                {/* Coluna 3: Contato */}
                <div>
                    <h4 className="text-white font-bold mb-4">Contato</h4>
                    <ul className="space-y-3 text-sm text-slate-400">
                        <li className="flex items-center gap-3">
                            <Mail size={16} className="text-blue-600" />
                            <span>contato@vpsouza.com.br</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Linkedin size={16} className="text-blue-600" />
                            <span>/vpsouzaconsultoria</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Instagram size={16} className="text-blue-600" />
                            <span>@sssegurosinistro</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 text-xs text-slate-600 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                <p>© 2026 SS Seguro & Sinistro. Todos os direitos reservados.</p>
                <p>VPSouza Consultoria</p>
            </div>
        </footer>
    );
}