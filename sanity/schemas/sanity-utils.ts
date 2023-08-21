import { client } from "@/sanity/lib/client";
import { queryPage } from "../lib/queries";
import { Page } from "@sanity/client";

export async function getPage(): Promise<Page[]> {
  return client.fetch(queryPage);
}
