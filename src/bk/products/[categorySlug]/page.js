//src/app/products/[categorySlug]/page.js
import { productsData } from "@/data/products";
import slugify from "@/utils/slugify";

export async function generateStaticParams() {
  const categories = [...new Set(productsData.map(p => p.category))];
  return categories.map(category => ({
    categorySlug: slugify(category),
  }));
}

export default function CategoryPage({ params }) {
  const { categorySlug } = params;

  const filteredProducts = productsData.filter(product =>
    slugify(product.category) === categorySlug && !product.subcategory
  );

  return (
    <div className="container py-20">
      <h1 className="text-2xl font-bold mb-6">{categorySlug.replace(/-/g, " ")}</h1>
      {filteredProducts.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <li key={product.name}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}
