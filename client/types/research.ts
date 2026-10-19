export interface Research {
  id: string;
  title: string;
  description: string;
  area: string;
  status: "Published" | "Ongoing" | "Under Review";
  year: number;
  link?: string;
}