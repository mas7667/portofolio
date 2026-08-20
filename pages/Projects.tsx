import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Code2, Cpu, Server } from 'lucide-react';

const Projects: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Dev': return <Code2 className="text-blue-500" size={20} />;
      case 'IoT': return <Cpu className="text-orange-500" size={20} />;
      case 'Infra': return <Server className="text-purple-500" size={20} />;
      default: return <Code2 className="text-slate-500" size={20} />;
    }
  };

  return (
    <div className="min-h-screen py-12 px-6 md:px-16 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Projets Réalisés</h2>
        <p className="text-slate-500">Une sélection de projets académiques et professionnels démontrant mes compétences techniques.</p>
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
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-blue-600 transition"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
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
            </div>
            
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
