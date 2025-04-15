// src/components/products/ProductCard.js

const ProductCard = ({ product }) => {
    return (
        <div className="border p-4 rounded-lg">
            <img src={product.seo.image} alt={product.name} className="w-full h-48 object-cover" />
            <h3 className="text-xl mt-2">{product.name}</h3>
            <p>{product.seo.description}</p>
        </div>
    );
};

export default ProductCard;
