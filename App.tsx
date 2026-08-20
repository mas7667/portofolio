import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Education from './pages/Education';
import AIChatWidget from './components/AIChatWidget';
import { Mail, Phone, Linkedin } from 'lucide-react';
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
          <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition p-4 bg-white rounded-xl shadow-sm border border-slate-100">
            <Mail className="text-blue-500" />
            <span className="font-medium">{PERSONAL_INFO.email}</span>
          </a>
          <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition p-4 bg-white rounded-xl shadow-sm border border-slate-100">
            <Phone className="text-green-500" />
            <span className="font-medium">{PERSONAL_INFO.phone}</span>
          </a>
          <a href="#" className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition p-4 bg-white rounded-xl shadow-sm border border-slate-100">
            <Linkedin className="text-blue-700" />
            <span className="font-medium">{PERSONAL_INFO.linkedin}</span>
          </a>
        </div>
      </div>
      <form className="space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Nom</label>
          <input type="text" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Votre nom" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
          <input type="email" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="votre@email.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
          <textarea rows={4} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Bonjour Fily..."></textarea>
        </div>
        <button className="w-full py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition">
          Envoyer le message
        </button>
      </form>
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
