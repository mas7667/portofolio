import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, Briefcase, GraduationCap, Mail, FolderGit2 } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Accueil', icon: Home },
  { path: '/experience', label: 'Expérience', icon: Briefcase },
  { path: '/projects', label: 'Projets', icon: FolderGit2 },
  { path: '/skills', label: 'Compétences', icon: User },
  { path: '/education', label: 'Formation', icon: GraduationCap },
  { path: '/contact', label: 'Contact', icon: Mail },
];

const Navigation: React.FC = () => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 bg-white border-r border-slate-200 z-40">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Fily S. Keita</h1>
          <p className="text-sm text-slate-500 mt-1">Technicien informatique</p>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600 font-medium shadow-sm' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`
              }
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-100">
          <div className="flex gap-4 justify-center">
            {/* Social Icons could go here */}
          </div>
          <p className="text-xs text-center text-slate-400 mt-4">
            © {new Date().getFullYear()} Portfolio
          </p>
        </div>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav aria-label="Navigation mobile" className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 z-40 px-2 py-2 flex justify-around items-center shadow-lg safe-area-bottom">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                isActive ? 'text-blue-600' : 'text-slate-400'
              }`
            }
          >
            <item.icon size={20} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Navigation;
