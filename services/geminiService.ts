import { EXPERIENCES, PERSONAL_INFO, PROJECTS, SKILLS } from '../constants';

export const getPortfolioAnswer = (message: string): string => {
  const query = message.toLocaleLowerCase('fr');

  if (/contact|courriel|email|téléphone/.test(query)) {
    return `Vous pouvez joindre Fily à ${PERSONAL_INFO.email} ou consulter son profil GitHub : ${PERSONAL_INFO.github}.`;
  }
  if (/projet|github|réalisation|application/.test(query)) {
    const featured = PROJECTS.filter((project) => project.featured).map((project) => project.title).join(', ');
    return `Les projets principaux sont ${featured}. La page Projets présente les ${PROJECTS.length} dépôts vérifiés.`;
  }
  if (/compétence|stack|technologie|langage/.test(query)) {
    return `Les compétences couvrent ${SKILLS.map((group) => group.category).join(', ')}. Consultez la page Compétences pour le détail.`;
  }
  if (/expérience|alstom|emploi|stage/.test(query)) {
    return `Le parcours comprend ${EXPERIENCES.map((experience) => `${experience.role} chez ${experience.company}`).join(', ')}.`;
  }
  return "Je peux vous orienter vers les projets, les compétences, l’expérience ou les coordonnées de Fily. Cette aide fonctionne localement et ne transmet aucune donnée à un service externe.";
};
