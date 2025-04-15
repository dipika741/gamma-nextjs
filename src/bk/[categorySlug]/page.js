// src/app/products/category/[categorySlug]/page.js

import { categories, productsData } from "@/data/products";
import slugify from "@/utils/slugify";
import ProductCard from "@/components/ProductCard";

export async function generateStaticParams() {
    return categories.map((category) => ({
        categorySlug: slugify(category),
    }));
}

export default function CategoryPage({ params }) {
    const { categorySlug } = params;

    const categoryName = categories.find(
        (cat) => slugify(cat) === categorySlug
    );

    if (!categoryName) {
        return <div className="container py-20">Category not found.</div>;
    }

    const filteredProducts = productsData.filter(
        (product) => slugify(product.category) === categorySlug
    );

    return (
        <div className="container py-20">
            <h1 className="text-2xl font-bold mb-6">{categoryName}</h1>
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <p>No products found in this category.</p>
            )}
        </div>
    );
}
