export interface Roadmap {
  _id: string;
  title: string;
  category: 'Frontend' | 'Backend' | 'DevOps';
  description: string;
  steps: {
    title: string;
    description: string;
    resources: string[];
  }[];
  createdAt?: Date;
}