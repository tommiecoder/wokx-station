export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  mode: string;
  certification: boolean;
  curriculum: {
    title: string;
    topics: string[];
  }[];
  outcomes: string[];
  prerequisites: string[];
  price: number;
  startDates: string[];
}