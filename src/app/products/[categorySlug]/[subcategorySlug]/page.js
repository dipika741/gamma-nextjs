import { productsData } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import SidebarSubcategory from '@/components/products/SidebarSubcategory';

export default function SubcategoryPage({ params }) {
    const { categorySlug, subcategorySlug } = params;
    console.log("categorySlug - " + categorySlug)
    console.log("productsData - " + productsData)

    const categoryProducts = productsData.filter(p => p.categorySlug === categorySlug);
    const subcategories = [...new Set(categoryProducts.map(p => p.subcategory).filter(Boolean))];

    const filteredProducts = categoryProducts.filter(
        (p) => p.subcategorySlug === subcategorySlug
    );
    console.log("filteredProducts - " + filteredProducts)
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
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.slug} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
