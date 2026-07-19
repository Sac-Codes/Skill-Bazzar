export type TeamRoleBadge =
  | 'Developer'
  | 'Graphic Designer'
  | 'Marketing'
  | 'Forms'
  | 'Management'
  | 'Coordinator'
  | 'Coder & Developer';

export interface TeamMember {
  name: string;
  position: string; // Student Council Position
  role: TeamRoleBadge;
  contribution: string;
  image: string; // image URL (or data URI)
  accentColor: string; // hex
}

// Note: Profile images use easy-to-replace circular placeholders.
// Replace `image` values later with actual photos.
export const teamData: TeamMember[] = [
  {
    name: 'Samriddhi Singh',
    position: 'Council Secretary',
    role: 'Management',
    contribution:
      'Managed registration workflows, ensuring form clarity, validation, and reliable data capture for SkillVerse participants.',
    image: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
      <svg xmlns='http://www.w3.org/2000/svg' width='256' height='256'>
        <defs>
          <radialGradient id='g' cx='30%' cy='30%' r='80%'>
            <stop offset='0%' stop-color='#60A5FA'/>
            <stop offset='55%' stop-color='#1D4ED8'/>
            <stop offset='100%' stop-color='#0A0F1C'/>
          </radialGradient>
        </defs>
        <rect width='256' height='256' rx='128' fill='url(#g)'/>
        <circle cx='128' cy='112' r='44' fill='rgba(255,255,255,0.22)'/>
        <rect x='56' y='150' width='144' height='56' rx='28' fill='rgba(255,255,255,0.18)'/>
        <path d='M78 208c18-28 82-28 100 0' fill='none' stroke='rgba(255,255,255,0.22)' stroke-width='10' stroke-linecap='round'/>
      </svg>
    `),
    accentColor: '#2563EB',
  },
  {
    name: 'Megha',
    position: 'Convenor',
    role: 'Graphic Designer',
    contribution:
      'Built responsive UI components in React, ensuring smooth routing, accessibility, and consistent premium styling across pages.',
    image: '/src/assets/Megha C-1.jpg',
    accentColor: '#10B981',
  },
  {
    name: 'Sachin Yadav',
    position: 'Head Boy',
    role: 'Coder & Developer',
    contribution:
      'Designed event visuals and premium UI elements, transforming ideas into cohesive graphics with consistent branding.',
    image: '/src/assets/Sac Profile IMG.jpg',
    accentColor: '#F97316',
  },
  {
    name: 'Manas',
    position: 'Sr. Captain',
    role: 'Developer',
    contribution:
      'Led the complete planning, development, branding, and technical implementation of the SkillVerse digital platform.',
    image: '/src/assets/manu_sb.png',
    accentColor: '#7C3AED',
  },
  {
    name: 'Suyash',
    position: 'Discipline Secretary',
    role: 'Marketing',
    contribution:
      'Coordinated promotion strategy across channels, aligning messaging, updates, and stakeholder engagement for SkillVerse 2026.',
    image: '/src/assets/suyash_sb.png',
    accentColor: '#3B82F6',
  },
];

