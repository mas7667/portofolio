export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: 'Web' | 'Mobile' | 'Backend' | 'DevOps' | 'Prototype';
  status: 'Déployé' | 'Fonctionnel' | 'Prototype' | 'Infrastructure';
  repository: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}
