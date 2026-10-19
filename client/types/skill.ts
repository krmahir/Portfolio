export interface Skill {
  name: string;
  category: string;
  level?: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}