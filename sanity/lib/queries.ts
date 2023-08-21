// ./nextjs-app/sanity/lib/queries.ts

import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`
  *[_type =='post' && defined(slug.current)] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    ...,
    author->,
    categories[]->
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

export const slugQuery = groq`*[_type == "post"]{ 
  slug
}`;

export const queryCategory = groq`*[_type == 'category']{
  title,  
}`;

export const queryCategories = groq`*[_type == "post" && queryCategory in categories[]->.title] | order(_createdAt desc){slug}`;

export const queryPage = groq`*[_type == "page" && name == "Teste Página"] {
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  url,
  content
}`;
