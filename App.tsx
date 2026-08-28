import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Education from './pages/Education';
import AIChatWidget from './components/AIChatWidget';
import { Github } from 'lucide-react';
import { PERSONAL_INFO } from './constants';

// Simple Contact Component (inline for simplicity)
const Contact = () => (
  <div className="min-h-screen py-12 px-6 md:px-16 max-w-4xl mx-auto flex flex-col justify-center">
    <h2 className="text-3xl font-bold text-slate-900 mb-8">Me Contacter</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <p className="text-slate-600 text-lg">
          Je suis actuellement à la recherche de nouveaux défis. N'hésitez pas à me contacter pour discuter de votre projet ou d'une opportunité.
        </p>
        <div className="flex flex-col gap-4">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition p-4 bg-white rounded-xl shadow-sm border border-slate-100">
            <Github className="text-slate-900" />
            <span className="font-medium">github.com/mas7667</span>
          </a>
        </div>
      </div>
      <div className="rounded-2xl bg-slate-900 p-8 text-white shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Échangeons</p>
        <h3 className="mt-3 text-2xl font-bold">Une opportunité ou un projet TI?</h3>
        <p className="mt-4 text-slate-300">Consultez mon profil GitHub pour découvrir mes dépôts, mon activité et ouvrir un échange professionnel.</p>
        <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 font-semibold hover:bg-blue-400">
          <Github size={18} /> Accéder à GitHub
        </a>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <HashRouter>
      <div className="flex flex-col md:flex-row min-h-screen bg-slate-50">
        <Navigation />
        
        {/* Main Content Area */}
        <main className="flex-1 md:ml-64 pb-20 md:pb-0 transition-all duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <AIChatWidget />
      </div>
    </HashRouter>
  );
}

export default App;
