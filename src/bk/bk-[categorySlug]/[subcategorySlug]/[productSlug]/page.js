import { productsData } from '@/data/products';
import Seo from '@/components/seo';

export const generateStaticParams = () => {
    return productsData
        .filter(p => p.subcategorySlug)
        .map(p => ({
            categorySlug: p.categorySlug,
            subcategorySlug: p.subcategorySlug,
            productSlug: p.slug
        }));
};

export default function ProductPage({ params }) {
    const { categorySlug, subcategorySlug, productSlug } = params;

    const product = productsData.find(
        p =>
            p.categorySlug === categorySlug &&
            p.subcategorySlug === subcategorySlug &&
            p.slug === productSlug
    );

    if (!product) return <div>Product not found</div>;

    return (
        <>
            <Seo {...product.seo} />
            <div className="container py-4">
                <h1>{product.name}</h1>
                <img src={product.seo.image} alt={product.name} className="img-fluid mb-4" />
                <p>{product.seo.description}</p>
            </div>
        </>
    );
}
