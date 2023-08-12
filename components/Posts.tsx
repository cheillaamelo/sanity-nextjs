// ./nextjs-app/app/_components/Posts.tsx
"use client";

import ClientSideRoute from "./ClientSideRoute";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Post } from "@/typings";
import Image from "next/image";
import urlFor from "@/sanity/lib/urlFor";

export default function Posts({ posts = [] }: { posts: Post[] }) {
  const title = posts.length === 1 ? `1 Post` : `${posts.length} Posts`;

  return (
    <div>
      <hr className="border-[#F7AB0A] mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {/* Posts */}
        {posts.map((post) => (
          <>
            <div className="block">
              {/* <ClientSideRoute route={`/post/${post.slug.current}`}> */}
              <ClientSideRoute route={`${post.slug.current}`}>
                <div
                  key={post._id}
                  className="flex flex-col group cursor-pointer"
                >
                  <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                    <Image
                      className="object-cover object-left lg:object-center"
                      src={urlFor(post.mainImage).url()}
                      alt={post.author.name}
                      fill
                    />
                    <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                      <div>
                        <p className="font-bold">{post.title}</p>
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
                      <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                        {post.categories.map((category) => (
                          // eslint-disable-next-line react/jsx-key
                          <div className="bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                            <p>{category.title}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ClientSideRoute>
              <div className="mt-5 flex-1">
                <p className="underline text-lg font-bold">{post.title}</p>
                <p className="line-clamp-2 text-gray-500">{post.description}</p>
              </div>
              <p className="mb-5 mt-5 font-bold flex items-center group-hover:underline">
                Leia Mais
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
