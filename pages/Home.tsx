import React from 'react';
import { ArrowRight, Github, FolderGit2, ServerCog, Smartphone } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-6 md:px-12 flex flex-col justify-center max-w-4xl mx-auto">
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase w-fit">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          Disponible pour opportunités
        </div>

        {/* Hero Text */}
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
          Bonjour, je suis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{PERSONAL_INFO.name}</span>.
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-500 font-light max-w-3xl">
          {PERSONAL_INFO.title}. Applications web et mobiles, soutien TI, réseaux et automatisation.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <Link 
            to="/projects"
            className="px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition flex items-center gap-2"
          >
            Explorer mes projets <ArrowRight size={18} />
          </Link>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition flex items-center gap-2"
          >
            Voir mon GitHub <Github size={18} />
          </a>
        </div>

        <div className="grid gap-4 pt-8 sm:grid-cols-3">
          {[{ icon: FolderGit2, value: '8', label: 'projets présentés' }, { icon: ServerCog, value: '3', label: 'projets déployés' }, { icon: Smartphone, value: 'Web + mobile', label: 'produits réalisés' }].map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <item.icon size={20} className="mb-4 text-blue-600" />
              <p className="text-xl font-bold text-slate-900">{item.value}</p>
              <p className="text-sm text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="mt-12 p-8 bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">À propos</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            {PERSONAL_INFO.summary}
          </p>
          
          <div className="mt-6 flex flex-wrap gap-3">
            {PERSONAL_INFO.languages.map(lang => (
              <span key={lang} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-sm font-medium">
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-slate-400 mt-8">
           <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" aria-label="Profil GitHub" className="hover:text-slate-900 transition"><Github size={24} /></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
