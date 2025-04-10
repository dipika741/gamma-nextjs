// src/components/ProductCard.js
import Link from "next/link";
import slugify from "@/utils/slugify";


const ProductCard = ({ product }) => {
    const productSlug = slugify(product.name);
    const imagePath = product.image || product.img;

    return (
        <Link href={`/${slugify(product.category)}/${slugify(product.name)}`}>            <div className="product-card">
            <img src={`/${imagePath}`} alt={product.name} width="200" />
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            {product.discount && <span className="discount">{product.discount}</span>}
        </div>
        </Link>
    );
};

export default ProductCard;
