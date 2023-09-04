import ClientSideRoute from "@/components/layout/ClientSideRoute";
import { getCategory } from "@/sanity/schemas/sanity-utils";

export default async function AllCategoriesPage() {
  const categories = await getCategory();
  return (
    <>
      <div>
        <p className="pt-40">CATEGORIAS PAGE</p>
        {categories.map((category) => (
          <>
            <div>
              <ClientSideRoute route={`/categoria/${category._id}`}>
                <p>{category.title}</p>
              </ClientSideRoute>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
