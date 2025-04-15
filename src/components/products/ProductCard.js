import Link from 'next/link';

export default function ProductCard({ product }) {
    //const linkHref = `/products/${product.categorySlug}/${product.slug}`;
    const linkHref = `/products/${product.categorySlug}/product/${product.slug}`;
    return (
        <Link href={linkHref} className="text-decoration-none text-dark">
            <div className="card mb-3">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.seo.description}</p>
                </div>
            </div>
        </Link>
    );
}
