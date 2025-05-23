export interface ArticleSection {
  title: string;
  content: string[];
}

export interface farming_guide_type {
  id: number;
  title: string;
  summary: string;
  image: string;
  details?: string;
  sections: ArticleSection[];
}
