import Iframe from "sanity-plugin-iframe-pane";
import type { DefaultDocumentNodeResolver } from "sanity/desk";

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  if (schemaType === "post") {
    return S.document().views([
      S.view.form(),

      S.view
        .component(Iframe)
        .options({
          // Necessário: Aceita uma função assíncrona
          // OU uma string
          url: `${
            process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000/"
          }/api/preview`,
          // Opcional: Defina o tamanho padrão
          defaulSize: `desktop`, // `área de trabalho` padrão
          // Opcional: Adicione um botão de recarregar ou recarregue em novas revisões de documentos
          reload: {
            button: true, // padrão `indefinido`
          },
          // Opcional: Passe atributos para o elemento `iframe` subjacente:
          // Consulte // Consulte https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
          attibutes: {},
        })
        .title("Visualizar Cheila"),
    ]);
  }
};
