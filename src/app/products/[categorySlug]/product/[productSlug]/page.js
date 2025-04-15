import { productsData } from '@/data/products';

export default function ProductDetailPage({ params }) {
    const { categorySlug, productSlug } = params;

    // Find product that matches both categorySlug and productSlug
    const product = productsData.find(
        (p) => p.categorySlug === categorySlug && p.slug === productSlug
    );

    if (!product) {
        return (
            <div className="container mt-4">
                <h2>Product not found</h2>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <h1>{product.name}</h1>
            <img
                src={product.seo.image}
                alt={product.name}
                className="img-fluid my-3"
                style={{ maxWidth: '300px' }}
            />
            <p>{product.seo.description}</p>
            <p><strong>Category:</strong> {product.category}</p>
            {product.subcategory && (
                <p><strong>Subcategory:</strong> {product.subcategory}</p>
            )}
        </div>
    );
}
