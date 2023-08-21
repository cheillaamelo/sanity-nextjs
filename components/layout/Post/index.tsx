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
      <div className="relative w-full drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out rounded-2xl h-80">
        {post?.mainImage ? (
          <Image
            className="object-cover object-left lg:object-center rounded-2xl"
            src={builder.image(post.mainImage).url()}
            fill
            alt={post?.mainImage?.alt}
          />
        ) : null}
      </div>
      {post?.body ? <PortableText value={post.body} /> : null}
    </Section>
  );
}
