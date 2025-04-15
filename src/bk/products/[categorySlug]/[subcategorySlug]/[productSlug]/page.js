//src/app/products/[categorySlug]/[subcategorySlug]/[productSlug]/page.js
import { productsData } from "@/data/products";
import slugify from "@/utils/slugify";

export async function generateStaticParams() {
  return productsData
    .filter(p => p.subcategory)
    .map(product => ({
      categorySlug: slugify(product.category),
      subcategorySlug: slugify(product.subcategory),
      productSlug: slugify(product.name),
    }));
}

export default function ProductInSubcategoryPage({ params }) {
  const { categorySlug, subcategorySlug, productSlug } = params;

  const product = productsData.find(
    (p) =>
      slugify(p.category) === categorySlug &&
      slugify(p.subcategory) === subcategorySlug &&
      slugify(p.name) === productSlug
  );

  if (!product) return <div className="container py-20">Product not found</div>;

  return (
    <div className="container py-20">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <img src={`/${product.image}`} alt={product.name} className="mb-4 max-w-full" />
      <p>{product.description}</p>
    </div>
  );
}
