import { Experience, Education, Skill, Project } from './types';

export const PERSONAL_INFO = {
  name: "Fily Sara Keita",
  title: "Analyste Programmeur",
  phone: "+1 (367) 990-2626",
  email: "fily.sara.keita@gmail.com",
  linkedin: "Fily Sara Keita",
  summary: "Passionné par les TI, j'ai acquis durant mon parcours scolaire et mes stages des compétences complémentaires en programmation et en gestion d'infrastructure. Mon objectif est d'appliquer ces connaissances afin de participer à la création de solutions stables et sécurisées. Rigoureux et curieux, je cherche à m'investir dans des projets stimulants.",
  languages: ["Français (Natif)", "Anglais (Intermédiaire)"]
};

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    role: "Stagiaire TI",
    company: "Alstom Transport Canada Inc",
    period: "04/2024 - 08/2024",
    description: [
      "Administration des accès et rôles utilisateurs.",
      "Contribution à la sécurité et à la conformité des systèmes.",
      "Optimisation d'outils collaboratifs (SharePoint) et automatisation de processus TI."
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
    period: "06/2021 - 10/2022",
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
  "AWS Cloud Practitioner",
  "Cisco CCNA 1-3, Cybersécurité",
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
    title: "EcoMonitor IoT",
    description: "Système complet de surveillance environnementale (température, humidité, qualité de l'air). Conception de l'architecture matérielle et développement de l'application mobile de visualisation en temps réel.",
    technologies: ["Python", "C++", "React Native", "MQTT", "Arduino"],
    category: "IoT",
    link: "#"
  },
  {
    id: "2",
    title: "Portfolio Interactif IA",
    description: "Application web moderne présentant mon parcours professionnel. Intégration d'un chatbot alimenté par Gemini pour répondre aux questions des recruteurs de manière interactive.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Google Gemini API"],
    category: "Dev",
    link: "#"
  },
  {
    id: "3",
    title: "Automation Admin Suite",
    description: "Ensemble de scripts PowerShell et Bash pour l'automatisation de la création de comptes utilisateurs et la gestion des droits d'accès sur Active Directory.",
    technologies: ["PowerShell", "Bash", "Active Directory", "Windows Server"],
    category: "Infra",
    link: "#"
  },
  {
    id: "4",
    title: "SecureNet Config",
    description: "Déploiement automatisé de configurations sécurisées pour commutateurs et routeurs Cisco. Mise en place de VLANs et de règles ACL pour segmenter le trafic critique.",
    technologies: ["Cisco IOS", "Ansible", "Python", "Network Security"],
    category: "Infra",
    link: "#"
  }
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant representing Fily Sara Keita. You are embedded in his portfolio website.
Answer questions about Fily based STRICTLY on the following resume data.
Speak in the first person ("I", "my") as if you are Fily.
Be professional, enthusiastic, and concise.
If asked about contact info, provide it.

Resume Data:
Name: ${PERSONAL_INFO.name}
Role: ${PERSONAL_INFO.title}
Profile: ${PERSONAL_INFO.summary}
Skills: ${JSON.stringify(SKILLS)}
Experience: ${JSON.stringify(EXPERIENCES)}
Education: ${JSON.stringify(EDUCATION)}
Certifications: ${JSON.stringify(CERTIFICATIONS)}
Languages: ${JSON.stringify(PERSONAL_INFO.languages)}
Projects: ${JSON.stringify(PROJECTS)}

Key Soft Skills: Agile/Scrum, Collaboration, Proactivity, Autonomy.
`;
