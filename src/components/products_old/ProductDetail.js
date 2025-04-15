function ProductDetail({ product }) {
    return (
        <div className="container my-4">
            <h1>{product.name}</h1>
            <Image
                src={product.seo.image}
                alt={product.name}
                width={400}
                height={300}
                className="img-fluid mb-3"
            />
            <p>{product.seo.description}</p>
            <p><strong>Category:</strong> {product.category}</p>
            {product.subcategory && (
                <p><strong>Subcategory:</strong> {product.subcategory}</p>
            )}
        </div>
    );
}
