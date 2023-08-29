"use client";

import { getPage } from "@/sanity/schemas/sanity-utils";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { Section } from "@/components/elements/Section";

const builder = imageUrlBuilder(client);

// eslint-disable-next-line @next/next/no-async-client-component
export default async function PageTest() {
  const pages = await getPage();
  return (
    <Section className="pt-40">
      <h1 className="uppercase text-red-600">projeto página</h1>
      {pages.map((page) => (
        <div key={page._id} className="block">
          <div>Título: {page.title}</div>
          <div>Slug: {page.slug}</div>
          <div className="relative w-full drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out rounded-2xl h-80">
            <Image
              className="object-cover object-left lg:object-center rounded-2xl"
              src={builder.image(page.image).url()}
              fill
              alt={page?.image?.alt}
            />
          </div>
        </div>
      ))}
    </Section>
  );
}
