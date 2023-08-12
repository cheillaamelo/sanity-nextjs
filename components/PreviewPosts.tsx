// ./nextjs-app/app/_components/PreviewPosts.tsx

"use client";

import { Post } from "@/typings";
import { useLiveQuery } from "@sanity/preview-kit";
import Posts from "@/components/Posts";
import { postsQuery } from "@/sanity/lib/queries";

export default function PreviewPosts({ posts = [] }: { posts: Post[] }) {
  const [data] = useLiveQuery(posts, postsQuery);

  return <Posts posts={data} />;
}
