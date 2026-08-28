import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Code2, Smartphone, Server, GitBranch, FlaskConical, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Web': return <Code2 className="text-blue-500" size={20} />;
      case 'Mobile': return <Smartphone className="text-emerald-500" size={20} />;
      case 'Backend': return <Server className="text-violet-500" size={20} />;
      case 'DevOps': return <GitBranch className="text-orange-500" size={20} />;
      case 'Prototype': return <FlaskConical className="text-slate-500" size={20} />;
      default: return <Code2 className="text-slate-500" size={20} />;
    }
  };

  return (
    <div className="min-h-screen py-12 px-6 md:px-16 max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3">Réalisations vérifiées</p>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Projets et dépôts</h2>
        <p className="text-slate-500">Huit projets sélectionnés sont présentés avec leur état réel et leur stack principale.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <div 
            key={project.id} 
            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                    {getIcon(project.category)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">
                    {project.title}
                  </h3>
                </div>
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${project.status === 'Déployé' ? 'bg-emerald-50 text-emerald-700' : project.status === 'Prototype' ? 'bg-amber-50 text-amber-700' : 'bg-slate-100 text-slate-600'}`}>{project.status}</span>
              </div>

              <p className="text-slate-600 mb-6 flex-1 leading-relaxed">
                {project.description}
              </p>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-md border border-slate-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-100 pt-5">
                <a href={project.repository} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600">
                  <Github size={17} /> Code source
                </a>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800">
                    <ExternalLink size={17} /> Démonstration
                  </a>
                )}
              </div>
            </div>
            
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
