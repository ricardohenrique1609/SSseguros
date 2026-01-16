import React from 'react';
import Link from 'next/link';
import * as Icons from 'lucide-react';

export default function ServiceCard({ title, description, iconName, link }) {
    const IconComponent = Icons[iconName] || Icons.HelpCircle;

    return (
        <Link href={link} className="block group h-full">
            <div className="h-full bg-white/60 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(99,102,241,0.15)] hover:-translate-y-2 hover:bg-white relative overflow-hidden">

                {/* Gradiente de Borda no Hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="mb-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:scale-110 transition-all duration-500 shadow-sm">
                    <IconComponent size={32} strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-indigo-600 transition-colors">
                    {title}
                </h3>

                <p className="text-slate-500 text-base leading-relaxed font-light group-hover:text-slate-600">
                    {description}
                </p>
            </div>
        </Link>
    );
}