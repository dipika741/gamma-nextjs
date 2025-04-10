// src/app/[categorySlug]/[productSlug]/page.js

import { productsData } from "@/data/products";
import slugify from "@/utils/slugify";

// Find product based on both category and slug
const getProductByCategoryAndSlug = (categorySlug, productSlug) => {
    return productsData.find(
        (product) =>
            slugify(product.category) === categorySlug &&
            slugify(product.name) === productSlug
    );
};

// ✅ Generate static params for each product under its category
export async function generateStaticParams() {
    return productsData.map((product) => ({
        categorySlug: slugify(product.category),
        productSlug: slugify(product.name),
    }));
}

// Optional: SEO metadata
export async function generateMetadata({ params }) {
    const product = getProductByCategoryAndSlug(params.categorySlug, params.productSlug);
    return {
        title: product?.name || "Product",
        description: product?.description || "View product details",
    };
}

// Page component
export default function ProductPage({ params }) {
    const product = getProductByCategoryAndSlug(params.categorySlug, params.productSlug);

    if (!product) {
        return <div className="container py-20">Product not found</div>;
    }

    return (
        <div className="container py-20">
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            <p className="mb-4">{product.description}</p>
            {product.image && (
                <img
                    src={`/assets/imgs/${product.image}`}
                    alt={product.name}
                    className="mb-4 max-w-full"
                />
            )}
            <p className="text-gray-600 mb-2">Category: {product.category}</p>
            <p className="text-green-700">Available: {product.available}</p>
        </div>
    );
}
