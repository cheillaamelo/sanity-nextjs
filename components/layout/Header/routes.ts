const routes = (pathname: string) => [
  { label: "Routing Academy", href: "/" },
  { label: "Cases", href: "/" },
  { label: "Materiais Gratuitos", href: "/" },
  {
    label: "Categorias",
    sub_items: [
      {
        label: "Cultura",
        href: "/",
      },
      { label: "Operações", href: "/" },
      { label: "Tecnologia", href: "/" },
    ],
    isActive: pathname?.startsWith("/solucoes"),
  },
];

export default routes;
