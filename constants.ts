import { Experience, Education, Skill, Project } from './types';

export const PERSONAL_INFO = {
  name: "Fily Sara Keita",
  title: "Technicien informatique · Développeur logiciel",
  email: "fily.sara.keita@gmail.com",
  github: "https://github.com/mas7667",
  summary: "Diplômé en Techniques de l’informatique, je conçois des applications web et mobiles et je déploie des services conteneurisés. Mon expérience couvre le développement, le soutien TI, les réseaux et l’automatisation. Je privilégie les solutions simples à maintenir, sécurisées et testables.",
  languages: ["Français (Natif)", "Anglais (Intermédiaire)"]
};

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    role: "Stagiaire TI",
    company: "Alstom Transport Canada Inc",
    period: "04/2025 - 08/2025",
    description: [
      "Structuration et nettoyage d'espaces SharePoint, contrôle des accès et harmonisation des droits.",
      "Création de pages internes et rédaction de guides de gestion des accès et d’archivage.",
      "Automatisation de tâches avec Power Automate Desktop et soutien à l’adoption des outils."
    ]
  },
  {
    id: "2",
    role: "Junior Développeur",
    company: "Orange Digital Center",
    period: "03/2022 - 07/2022",
    description: [
      "Collaboration agile sur un projet de surveillance environnementale IoT.",
      "Conception d'une application web et mobile connectée à un dispositif IoT.",
      "Validation des livrables et documentation technique."
    ]
  },
  {
    id: "3",
    role: "Technicien Réseaux",
    company: "Nadinet Technologies",
    period: "2020 - 2021",
    description: [
      "Installation et configuration de postes et équipements réseau.",
      "Câblage, optimisation de routeurs et commutateurs.",
      "Gestion de la mise en réseau et maintenance des infrastructures."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "1",
    degree: "Techniques de l'Informatique",
    institution: "Cégep de La Pocatière",
    year: "2023 - 2026"
  },
  {
    id: "2",
    degree: "Licence en Systèmes Réseaux et Télécoms",
    institution: "Université Alioune Diop de Bambey, Sénégal",
    year: "2017 - 2022"
  },
  {
    id: "3",
    degree: "Diplôme d'études secondaires",
    institution: "Lycée Oumar Bah de Kalabancoura, Mali",
    year: "2014 - 2017"
  }
];

export const CERTIFICATIONS = [
  "Parcours Cisco CCNA 1–3",
  "Cybersecurity Essentials",
  "Linux Unhatched"
];

export const SKILLS: Skill[] = [
  {
    category: "Infrastructure & Cloud",
    items: ["Windows Server", "Linux", "AWS", "Docker", "Kubernetes", "Jenkins", "Ansible", "Cisco CCNA"]
  },
  {
    category: "Développement",
    items: ["Java", "JavaScript/TypeScript", "Python", "C#", "PHP", "React JS", "Next JS", "React Native", "Flutter", "Spring Boot", "Django", "Node.js", "HTML", "CSS", "Tailwind CSS" ]
  },
  {
    category: "Base de Données",
    items: ["SQL Server", "MySQL", "PostgreSQL", "Supabase", "NoSQL"]
  },
  {
    category: "Outils & Autres",
    items: ["Git/GitLab/GitHub Actions", "VS Code", "Postman", "Wireshark", "VMWare", "Packet Tracer"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "GestionCompte",
    description: "Application bancaire de démonstration avec authentification JWT, comptes, dépôts, retraits, virements, historique paginé, observabilité et chaîne CI/CD complète.",
    technologies: ["Java 17", "Spring Boot 4.1", "Spring Security", "JPA", "PostgreSQL", "Docker", "GitHub Actions", "Render"],
    category: "Backend",
    status: "Déployé",
    repository: "https://github.com/mas7667/gestionCompte",
    liveUrl: "https://gestion-compte-main.onrender.com",
    featured: true
  },
  {
    id: "2",
    title: "ÉcoPanier",
    description: "Application mobile de réduction du gaspillage alimentaire : inventaire, dates d’expiration, suggestions de recettes, circulaires, appareil photo et synchronisation Supabase.",
    technologies: ["Expo 54", "React Native 0.81", "React 19", "TypeScript 5.9", "Supabase 2.97"],
    category: "Mobile",
    status: "Fonctionnel",
    repository: "https://github.com/mas7667/ecopanier",
    featured: true
  },
  {
    id: "3",
    title: "Pneus Express",
    description: "Gestion d’inventaire de pneus et de rendez-vous avec authentification, rôles employé/client, capacité par créneau et persistance Supabase.",
    technologies: ["React 19", "TypeScript 5.8", "Vite 6", "React Router 7", "Supabase 2.86"],
    category: "Web",
    status: "Déployé",
    repository: "https://github.com/mas7667/pneus-express",
    liveUrl: "https://pneus-express.vercel.app",
    featured: true
  },
  {
    id: "4",
    title: "Vue Sur Mer",
    description: "Plateforme hôtelière avec espaces client et administration, gestion des chambres, réservations, promotions, clients et satisfaction.",
    technologies: ["React 19", "React Router 6", "Supabase 2.84", "Bootstrap 5", "Tailwind CSS 4"],
    category: "Web",
    status: "Déployé",
    repository: "https://github.com/mas7667/Hotel",
    liveUrl: "https://hotel-five-smoky.vercel.app",
    featured: true
  },
  {
    id: "5",
    title: "ProSport Voyages",
    description: "Application Django de gestion de voyages sportifs, d’événements et de réservations avec authentification et vues d’administration.",
    technologies: ["Python 3", "Django 5.1", "SQLite", "Bootstrap 5", "HTML/CSS"],
    category: "Web",
    status: "Fonctionnel",
    repository: "https://github.com/mas7667/Trip-App"
  },
  {
    id: "6",
    title: "Grade API CI/CD",
    description: "API Express conteneurisée et pipeline GitHub Actions vers GHCR, avec mise à jour automatisée du dépôt GitOps consommé par Argo CD.",
    technologies: ["Node.js", "Express 4.19", "Docker", "GitHub Actions", "GHCR", "Argo CD"],
    category: "DevOps",
    status: "Infrastructure",
    repository: "https://github.com/mas7667/kubernetes_cicd"
  },
  {
    id: "7",
    title: "Grade API GitOps",
    description: "Manifestes Kubernetes versionnés pour le déploiement reproductible de Grade API : ressources, service interne et image immuable par commit.",
    technologies: ["Kubernetes", "GitOps", "Argo CD", "GHCR", "YAML"],
    category: "DevOps",
    status: "Infrastructure",
    repository: "https://github.com/mas7667/grade-api-gitops"
  },
  {
    id: "8",
    title: "Portfolio professionnel",
    description: "Portfolio React typé présentant le parcours, les compétences et l’inventaire vérifié des dépôts, avec construction Vite et styles Tailwind compilés.",
    technologies: ["React 19", "TypeScript 5.8", "Vite 6", "Tailwind CSS 4"],
    category: "Web",
    status: "Fonctionnel",
    repository: "https://github.com/mas7667/portofolio"
  }
];
