import { productsData } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import SidebarSubcategory from '@/components/products/SidebarSubcategory';

export default function CategoryPage({ params }) {
    const { categorySlug } = params;
    const categoryProducts = productsData.filter(p => p.categorySlug === categorySlug);
    const subcategories = [
        ...new Set(categoryProducts.map(p => p.subcategory).filter(sub => sub && sub.trim() !== ''))
    ];

    return (
        <div className="container mt-4">
            <div className="row">
                {/* <div className="col-md-3">
                    <SidebarSubcategory
                        categorySlug={categorySlug}
                        subcategories={subcategories}
                        products={categoryProducts}
                    />
                </div> */}
                <div className="col-md-9">
                    {categoryProducts.map((product) => (
                        <ProductCard key={product.slug} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
