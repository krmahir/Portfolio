export interface Publication {
  id: string;
  title: string;
  authors: string[];
  publication: string;
  year: string;
  description: string;
  url?: string;
  doi?: string;
}

export const publications: Publication[] = [
  // প্রকাশিত বা যাচাইযোগ্য academic publication এখানে যোগ করবে।
];