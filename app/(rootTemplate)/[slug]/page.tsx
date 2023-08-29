// ./nextjs-app/app/[slug]/page.tsx

import { draftMode } from "next/headers";
import Poste from "../../../components/layout/Post";
import PreviewProvider from "../../../components/layout/PreviewProvider";
import PreviewPost from "../../../components/layout/PreviewPost";
import { cachedClient } from "@/sanity/lib/client";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { getCachedClient } from "@/sanity/lib/getClient";
import { Post } from "@/typings";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  const posts = await cachedClient(postPathsQuery);

  return posts;
}

export default async function Page({ params }: { params: any }) {
  const preview = draftMode().isEnabled
    ? { token: process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN }
    : undefined;
  const post = await getCachedClient(preview)<Post>(postQuery, params);

  if (preview?.token) {
    return (
      <PreviewProvider token={preview.token}>
        <PreviewPost post={post} />
      </PreviewProvider>
    );
  }

  return <Poste post={post} />;
}
