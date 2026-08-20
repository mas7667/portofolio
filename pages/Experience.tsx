import React from 'react';
import { EXPERIENCES } from '../constants';
import { Calendar, Building2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-6 md:px-16 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Expériences Professionnelles</h2>
      <p className="text-slate-500 mb-12">Mon parcours dans le développement et l'administration système.</p>

      <div className="space-y-12 relative border-l-2 border-slate-200 ml-3 md:ml-6">
        {EXPERIENCES.map((exp, index) => (
          <div key={exp.id} className="relative pl-8 md:pl-12 group">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-slate-300 group-hover:border-blue-500 transition-colors duration-300"></div>
            
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-2">
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 text-slate-600 font-medium mt-1">
                  <Building2 size={16} />
                  <span>{exp.company}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-slate-400 bg-slate-50 px-3 py-1 rounded-full w-fit">
                <Calendar size={14} />
                {exp.period}
              </div>
            </div>

            <ul className="mt-4 space-y-2">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
