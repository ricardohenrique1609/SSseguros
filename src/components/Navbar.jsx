'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Shield, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                ? 'py-4 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm'
                : 'py-8 bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* Logo Minimalista */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-indigo-600 text-white p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                        <Shield size={20} fill="currentColor" />
                    </div>
                    <span className="text-xl font-bold text-slate-900 tracking-tight">
                        SS<span className="text-slate-400 font-normal">Seguros</span>
                    </span>
                </Link>

                {/* Desktop Menu Clean */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/servicos/segurado" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Serviços</Link>
                    <Link href="/checklist/colisao" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Checklists</Link>

                    <Link
                        href="https://wa.me/5511995595551"
                        target="_blank"
                        className="group bg-slate-900 hover:bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-indigo-500/30 flex items-center gap-2"
                    >
                        Contato
                        <ArrowUpRight size={16} className="text-slate-400 group-hover:text-white transition-colors" />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-900 bg-white p-2 rounded-full shadow-sm border border-slate-100">
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-slate-100 p-6 md:hidden flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
                    <Link href="/servicos/segurado" className="text-lg font-semibold text-slate-800 py-2">Serviços</Link>
                    <Link href="/checklist/colisao" className="text-lg font-semibold text-slate-800 py-2">Checklists</Link>
                    <Link href="https://wa.me/5511995595551" className="bg-indigo-600 text-white py-4 rounded-2xl text-center font-bold shadow-lg shadow-indigo-600/20">
                        Falar no WhatsApp
                    </Link>
                </div>
            )}
        </nav>
    );
}