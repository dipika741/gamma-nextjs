import { productsData } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export const generateStaticParams = () => {
    const params = [];
    productsData.forEach(p => {
        if (p.subcategorySlug) {
            params.push({
                categorySlug: p.categorySlug,
                subcategorySlug: p.subcategorySlug
            });
        }
    });

    // Remove duplicates
    const unique = params.filter(
        (value, index, self) =>
            index === self.findIndex(
                v => v.categorySlug === value.categorySlug && v.subcategorySlug === value.subcategorySlug
            )
    );

    return unique;
};

export default function SubcategoryPage({ params }) {
    const { categorySlug, subcategorySlug } = params;

    const subcategoryProducts = productsData.filter(
        p => p.categorySlug === categorySlug && p.subcategorySlug === subcategorySlug
    );

    return (
        <div className="container py-4">
            <h2 className="mb-4 text-capitalize">
                {subcategoryProducts[0]?.subcategory || 'Subcategory'} Products
            </h2>
            <div className="row">
                {subcategoryProducts.map(product => (
                    <div className="col-md-4 mb-3" key={product.slug}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}
