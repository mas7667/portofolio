import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../constants';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-6 md:px-16 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        
        {/* Education Column */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <GraduationCap className="text-blue-600" size={32} />
            Formation
          </h2>
          
          <div className="space-y-8">
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="relative pl-6 border-l-2 border-slate-200">
                <div className="mb-1 text-sm font-semibold text-blue-600 uppercase tracking-wide">
                  {edu.year}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{edu.degree}</h3>
                <p className="text-slate-500 mt-1">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <Award className="text-amber-500" size={32} />
            Certifications
          </h2>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <ul className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <li key={idx} className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition">
                  <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                  <span className="font-medium text-slate-700">{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 p-6 bg-slate-100 rounded-2xl">
            <h3 className="font-semibold text-slate-900 mb-2">Langues</h3>
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <span className="text-slate-600">Français</span>
                    <span className="text-xs font-bold bg-white px-2 py-1 rounded text-slate-800">Natif</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-full"></div>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <span className="text-slate-600">Anglais</span>
                    <span className="text-xs font-bold bg-white px-2 py-1 rounded text-slate-800">Intermédiaire</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-[60%]"></div>
                </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Education;
