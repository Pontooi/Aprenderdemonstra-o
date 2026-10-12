export interface CourseLevel {
  id: string;
  name: string;
  badge?: string;
  dayAndTime: string;
  startDate: string;
  description: string;
  features: string[];
  recommendedFor: string;
}

export interface SpacePhoto {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  highlight: string;
}

export interface SocialPost {
  id: string;
  caption: string;
  likes: number;
  comments: number;
  tag: string;
  image: string;
}
