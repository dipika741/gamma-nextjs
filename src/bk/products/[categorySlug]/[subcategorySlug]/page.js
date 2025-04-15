//src/app/products/[categorySlug]/[subcategorySlug]/page.js
import { productsData } from "@/data/products";
import slugify from "@/utils/slugify";

export async function generateStaticParams() {
  const subcategories = [
    ...new Set(
      productsData
        .filter(p => p.subcategory)
        .map(p => `${slugify(p.category)}|${slugify(p.subcategory)}`)
    ),
  ];

  return subcategories.map((pair) => {
    const [categorySlug, subcategorySlug] = pair.split("|");
    return { categorySlug, subcategorySlug };
  });
}

export default function SubcategoryPage({ params }) {
  const { categorySlug, subcategorySlug } = params;

  const filtered = productsData.filter(
    (p) =>
      slugify(p.category) === categorySlug &&
      slugify(p.subcategory) === subcategorySlug
  );

  return (
    <div className="container py-20">
      <h1 className="text-2xl font-bold mb-6">{subcategorySlug.replace(/-/g, " ")}</h1>
      {filtered.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(product => (
            <li key={product.name}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p>No products found in this subcategory.</p>
      )}
    </div>
  );
}
