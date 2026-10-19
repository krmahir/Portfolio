export interface Project {
  slug: string;
  title: string;
  description: string;
  details: string;
  category: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  featured: boolean;
}