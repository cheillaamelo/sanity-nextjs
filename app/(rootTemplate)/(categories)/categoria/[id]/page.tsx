import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Posts from "@/components/layout/Posts";
import { Post } from "@/typings";

const postsCategory = groq`
  *[_type =='post' && references($id)] {
    ...,
    "id": _id,
    author->,
    categories->{title},
  } | order(_createdAt desc)
`;

export const revalidate = 60; // revalidate this page every 60 seconds

type Props = {
  params: {
    id: string;
  };
};

export default async function CategoryPage({ params: { id } }: Props) {
  const posts: Post[] = await client.fetch(postsCategory, { id });

  return (
    <>
      <h1 className="pt-12 text-center">PAGE CATEGORY</h1>
      <Posts posts={posts} />
    </>
  );
}
