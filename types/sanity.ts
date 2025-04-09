/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Slug {
  current: string;
  _type: string;
}

export interface Category {
  name: string;
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  slug: Slug;
  [key: string]: any; 
}

export interface Author {
  role: string | null;
  name: string;
}

export interface Article {
  author: Author;
  category: Category;
  content: any[]; 
  mainImage: string;
  slug: Slug;
  subtitle: string;
  title: string;
  _createdAt: string;
  _id: string;
}