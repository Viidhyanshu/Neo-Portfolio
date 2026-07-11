export interface Skill {
  name: string;
  icon: string;
  accent: string;
}

export interface SkillCategory {
  label: string;
  accent: string;
  skills: Skill[];
}
