export interface IProjectList {
  id: number;
  title: string;
  tags: string[];
  images: string[];
  thumbnail?: string;
  description: string;
  whatIDid?: string[];
  whatILearned?: string[];
  codeImage?: string[];
  github: string;
  demo?: string;
  icons?: string;
  date: string;
  contents: any[];
}
