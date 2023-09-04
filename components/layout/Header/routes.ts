const routes = (pathname: string) => [
  { label: "Routing Academy", href: "/" },
  { label: "Cases", href: "/" },
  { label: "Materiais Gratuitos", href: "/" },
  {
    label: "Categorias",
    sub_items: [
      {
        label: "Cultura",
        href: "/categoria/cultura",
      },
      { label: "Operações", href: "/categoria/operacoes" },
      { label: "Tecnologia", href: "/categoria/tecnologia" },
    ],
    isActive: pathname?.startsWith("/solucoes"),
  },
];

export default routes;
