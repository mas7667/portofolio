import React from 'react';
import { SKILLS } from '../constants';
import { Server, Terminal, Database, Code2, CheckCircle2 } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    if (category.includes('Infrastructure')) return <Server className="text-purple-500" />;
    if (category.includes('Développement')) return <Code2 className="text-blue-500" />;
    if (category.includes('Données')) return <Database className="text-emerald-500" />;
    return <Terminal className="text-orange-500" />;
  };

  return (
    <div className="min-h-screen py-12 px-6 md:px-16 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Compétences Techniques</h2>
        <p className="text-slate-500">Une expertise polyvalente entre le développement logiciel et l'infrastructure.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-slate-50 rounded-lg">
                  {getIcon(skillGroup.category)}
                </div>
                <h3 className="font-semibold text-slate-800">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1 text-sm bg-slate-50 text-slate-600 rounded-md border border-slate-100 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
      </div>

      <div className="mt-8 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm text-blue-900">
        <CheckCircle2 className="mt-0.5 shrink-0" size={20} />
        <p>Ces technologies proviennent du code et des configurations présents dans les dépôts. Aucun pourcentage de maîtrise arbitraire n’est affiché.</p>
      </div>

      {/* Soft Skills Section */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
        <h3 className="text-xl font-bold mb-6">Compétences Personnelles (Soft Skills)</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {['Gestion de projets', 'Agile/Scrum', 'Collaboration', 'Proactivité', 'Autonomie', 'Curiosité'].map((s) => (
            <div key={s} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center text-sm font-medium hover:bg-white/20 transition">
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
