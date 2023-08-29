// ./nextjs-app/app/_components/Posts.tsx
"use client";

import ClientSideRoute from "../ClientSideRoute";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Post } from "@/typings";
import Image from "next/image";
import urlFor from "@/sanity/lib/urlFor";
import { PortableText } from "@portabletext/react";
import { Section } from "@/components/elements/Section";

export default function Posts({ posts = [] }: { posts: Post[] }) {
  const title = posts.length === 1 ? `1 Post` : `${posts.length} Posts`;

  return (
    <Section className="pt-40">
      <div className="flex h-full relative min-h-[640px]">
        <hr className="border-[#F7AB0A] mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
          {/* Posts */}
          {posts.map((post) => (
            <>
              <div className="block">
                {/* <ClientSideRoute route={`/post/${post.slug.current}`}> */}
                <ClientSideRoute route={`/${post.slug.current}`}>
                  <div
                    key={post._id}
                    className="flex flex-col group cursor-pointer"
                  >
                    <div className="relative w-full drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out rounded-2xl h-80">
                      <Image
                        className="object-cover object-left lg:object-center rounded-2xl"
                        src={urlFor(post.mainImage).url()}
                        alt={post.author.name}
                        fill
                      />
                      <div className="absolute bottom-0 w-full rounded-b-2xl drop-shadow-lg text-white p-5 flex justify-between">
                        <div>
                          <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center mb-2">
                            {!post.categories
                              ? null
                              : post.categories.map((category) => (
                                  <div
                                    key={category._id}
                                    className="bg-[#3CBC8D] text-center text-black px-3 py-1 rounded-[4px] text-sm font-semibold"
                                  >
                                    <p>{category.title}</p>
                                  </div>
                                ))}
                          </div>
                          <p className="font-bold mb-2">{post.title}</p>
                          <div className="flex items-center justify-between space-x-2">
                            <div className="flex items-center">
                              <Image
                                className="rounded-full"
                                src={urlFor(post.author.image).url()}
                                alt={post.author.name}
                                height={50}
                                width={50}
                              />
                              <p className="ml-2">{post.author.name}</p>
                            </div>

                            <p>
                              {new Date(post._createdAt).toLocaleDateString(
                                "pt-BR",
                                {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                }
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ClientSideRoute>
                <div className="mt-5 flex-1">
                  <div className="line-clamp-6">
                    <PortableText value={post.body} />
                  </div>
                </div>
                <p className="mb-5 mt-5 font-bold flex items-center group-hover:underline">
                  Ir para o artigo
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </Section>
  );
}
