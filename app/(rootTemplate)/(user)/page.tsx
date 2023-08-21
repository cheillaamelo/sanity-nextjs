// ./nextjs-app/app/pages/index.tsx

import { draftMode } from "next/headers";
import { getCachedClient } from "@/sanity/lib/getClient";
import { postsQuery } from "@/sanity/lib/queries";
import Posts from "../../../components/layout/Posts";
import PreviewPosts from "../../../components/layout/PreviewPosts";
import PreviewProvider from "../../../components/layout/PreviewProvider";

export default async function Home() {
  const preview = draftMode().isEnabled
    ? { token: process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN }
    : undefined;
  const posts = await getCachedClient(preview)(postsQuery);

  if (preview && preview.token) {
    return (
      <PreviewProvider token={preview.token}>
        <PreviewPosts posts={posts} />
      </PreviewProvider>
    );
  }

  return <Posts posts={posts} />;
}
