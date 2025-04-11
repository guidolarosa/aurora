// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

const articleParams = `
  (!defined($editorial)      || editorial->name == $editorial) 
  && (!defined($author)      || author->name == $author) 
  && (!defined($dateFrom)    || _createdAt >= $dateFrom)
  && (!defined($dateTo)      || _createdAt <= $dateTo) 
  && (!defined($category)    || category->slug.current == $category)
  && (!defined($searchParam) || 
    (title match $searchParam) ||
    (content[].children[].text match $searchParam) ||
    (author->name match $searchParam) ||
    (category->name match $searchParam) ||
    (subtitle match $searchParam)
  )
`;

const contentParams = `
  ...,
  _type == "image" => {
    asset->
  },
  markDefs[]{
    ...,
    _type == "externalLink" => {
      "slug": @.reference->slug
    }
  }`

const articlesQuery = `{
  _createdAt,
  _id,
  title,
  subtitle,
  author->{
    role->,
    name
  },
  category->,
  editorial->,
  "mainImage": mainImage.asset->url,
  slug,
  content[]{${contentParams}},
}`;

export const CATEGORIES_QUERY = groq`*[_type == "category"]`;

export const HOME_QUERY = groq`*[_type == "home" && featuredArticle->language == $language][0] {
  featuredArticle->${articlesQuery},
  footer[]{${contentParams}}
}`;

export const COPYRIGHT_QUERY = groq`*[_type == "copyright" && language == $language][0] {
  content[]{${contentParams}}
}`;
export const DATA_PROTECTION_QUERY = groq`*[_type == "dataProtection" && language == $language][0] {
  content[]{${contentParams}}
}`;

export const ARTICLES = groq`*[_type == "article" && ${articleParams}] | order(_createdAt desc) [$trim_start...$trim_end] ${articlesQuery}`;

export const ARTICLES_ASC = groq`*[_type == "article" && ${articleParams}] | order(_createdAt asc) [$trim_start...$trim_end] ${articlesQuery}`;

export const ARTICLES_DESC = groq`*[_type == "article" && ${articleParams}] | order(_createdAt desc) [$trim_start...$trim_end] ${articlesQuery}`;

export const ARTICLE = groq`*[_type == "article" && slug.current == $slug][0] ${articlesQuery}`;

export const ARTICLES_BY_CATEGORY = groq`*[_type == "article" && category->slug.current == $category && language == $language] ${articlesQuery}`;

export const PAGINATED_ARTICLES_BY_CATEGORY = groq`*[_type == "article" && category->slug.current == $category && language == $language && ${articleParams}] | order(_createdAt desc) [$trim_start...$trim_end] ${articlesQuery}`;

export const PAGINATED_ARTICLES_BY_CATEGORY_ASC = groq`
  *[_type == "article" && category->slug.current == $category && ${articleParams}]
  | order(_createdAt asc)
  [$trim_start...$trim_end]
  ${articlesQuery}
`;

export const PAGINATED_ARTICLES_BY_CATEGORY_DESC = groq`
  *[_type == "article" && category->slug.current == $category && ${articleParams}]
  | order(_createdAt desc)
  [$trim_start...$trim_end]
  ${articlesQuery}
`;

export const CATEGORY_COUNT = groq`count(*[_type == "article" && category->slug.current == $category && ${articleParams}])`;

export const ALL_COUNT = groq`count(*[_type == "article" && ${articleParams} ])`;

export const AUTHORS = groq`*[_type == "author"]`;

export const EDITORIALS = groq`*[_type == "editorial"]`;
