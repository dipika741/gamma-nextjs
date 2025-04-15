import { productsData } from '@/data/products';
import Seo from '@/components/seo';
import ProductCard from '@/components/ProductCard';

export async function generateStaticParams() {
    const params = [];

    productsData.forEach(product => {
        if (product.subcategorySlug) {
            params.push({
                slug: [product.categorySlug, product.subcategorySlug],
            });
            params.push({
                slug: [product.categorySlug, product.subcategorySlug, product.slug],
            });
        } else {
            params.push({
                slug: [product.categorySlug, product.slug],
            });
        }
    });

    // Also include the category page paths
    const categorySlugs = [
        ...new Set(productsData.map(p => p.categorySlug)),
    ];
    categorySlugs.forEach(category => {
        params.push({ slug: [category] });
    });

    return params;
}

export default function DynamicProductPage({ params }) {
    const { slug } = params;

    if (slug.length === 1) {
        // Category Page
        const categorySlug = slug[0];
        const categoryProducts = productsData.filter(p => p.categorySlug === categorySlug);

        return (
            <div className="container py-4">
                <h2 className="mb-4 text-capitalize">{categorySlug.replace(/-/g, ' ')} Products</h2>
                <div className="row">
                    {categoryProducts.map(product => (
                        <div className="col-md-4 mb-3" key={product.slug}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (slug.length === 2) {
        const [categorySlug, secondSlug] = slug;

        // Try to find a product without subcategory
        const product = productsData.find(
            p => p.categorySlug === categorySlug && p.slug === secondSlug && !p.subcategorySlug
        );

        if (product) {
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

        // Else treat secondSlug as a subcategory
        const subcategoryProducts = productsData.filter(
            p => p.categorySlug === categorySlug && p.subcategorySlug === secondSlug
        );

        if (subcategoryProducts.length > 0) {
            return (
                <div className="container py-4">
                    <h2 className="mb-4 text-capitalize">
                        {subcategoryProducts[0].subcategory || 'Subcategory'} Products
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
    }

    if (slug.length === 3) {
        const [categorySlug, subcategorySlug, productSlug] = slug;
        const product = productsData.find(
            p =>
                p.categorySlug === categorySlug &&
                p.subcategorySlug === subcategorySlug &&
                p.slug === productSlug
        );

        if (product) {
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
    }

    return <div className="container py-5 text-danger">404 - Product or page not found.</div>;
}
