// ./nextjs-app/app/_components/Post.tsx

"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { Post } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { Section } from "@/components/elements/Section";
import { Title } from "@/components/elements/Texts";

const builder = imageUrlBuilder(client);

export default function Post({ post }: { post: Post }) {
  return (
    <Section className="pt-40">
      <Title className="mb-8 text-center font-bold py-5 text-2xl">
        {post.title}
      </Title>
      <div className="relative">
        {post?.mainImage ? (
          <Image
            className="object-contain relative"
            src={builder.image(post.mainImage).url()}
            fill
            alt={post?.mainImage?.alt}
          />
        ) : null}
        {post?.body ? <PortableText value={post.body} /> : null}
      </div>
    </Section>
  );
}
