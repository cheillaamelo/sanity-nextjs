import { client } from "@/sanity/lib/client";
import { queryCategory, queryPage } from "../lib/queries";
import { Page, Post } from "@/typings";

export async function getPage(): Promise<Page[]> {
  return client.fetch(queryPage);
}

export async function getCategory(): Promise<Post[]> {
  return client.fetch(queryCategory);
}
