// ./nextjs-app/app/components/PreviewPost.tsx

"use client";

import { useParams } from "next/navigation";
import type { Post } from "@/typings";
import { useLiveQuery } from "@sanity/preview-kit";
import { postQuery } from "@/sanity/lib/queries";
import Poste from "../Post";

export default function PreviewPost({ post }: { post: Post }) {
  const params = useParams();
  const [data] = useLiveQuery(post, postQuery, params);

  return <Poste post={data} />;
}
