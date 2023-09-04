import type { DefaultDocumentNodeResolver } from "sanity/desk";
import { SeoToolsPane } from "sanity-plugin-seo-tools";

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (S) => {
  return S.document().views([
    S.view.form(),
    S.view
      .component(SeoToolsPane)
      .options({
        fetch: true,
        resolveProductionUrl: (doc) =>
          new URL(`https://sanity.io/${doc?.slug?.current}`),
        select: (doc) => ({
          focus_keyword: doc.focus_keyword ?? "",
          seo_title: doc.seo_title ?? "",
          meta_description: doc.meta_description ?? "",
          focus_synonyms: doc.focus_synonyms ?? [],
        }),
        prepare: (doc) => ({
          title: doc.seo_title ?? "", // when using `fetch` this is extracted from the <title> tag
          description: doc.meta_description ?? "", // when using `fetch` this is extracted from the <meta name="description" /> tag
          locale: doc.__i18n_lang ?? "en-US", // when using `fetch` this is extracted from the `lang` attribute of the root tag
          content: ReactDOMServer.renderToStaticMarkup(
            <PortableText document={doc.content} />
          ), // when using `fetch` this is extracted from `body`. This does not need to be an exact copy of your live website, but should match the semantic structure for proper analysis
        }),
      })
      .title("SEO"),
  ]);
};

export default S.defaults();
