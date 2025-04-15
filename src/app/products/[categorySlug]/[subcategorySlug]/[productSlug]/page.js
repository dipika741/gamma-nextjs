import { productsData } from '@/data/products';

export default function ProductDetailPage({ params }) {
    const { categorySlug, subcategorySlug, productSlug } = params;

    const product = productsData.find(
        (p) =>
            p.categorySlug === categorySlug &&
            p.slug === productSlug &&
            (p.subcategorySlug === subcategorySlug || p.subcategorySlug === '')
    );

    if (!product) return <div className="container mt-4">Product not found.</div>;

    return (
        <div className="container mt-4">product details page
            <h1>{product.name}</h1>
            <img
                src={product.seo.image}
                alt={product.name}
                className="img-fluid my-3"
                style={{ maxWidth: '400px' }}
            />
            <p>{product.seo.description}</p>
            <ul className="list-group mt-3">
                <li className="list-group-item"><strong>Category:</strong> {product.category}</li>
                {product.subcategory && (
                    <li className="list-group-item"><strong>Subcategory:</strong> {product.subcategory}</li>
                )}
            </ul>
        </div>
    );
}
