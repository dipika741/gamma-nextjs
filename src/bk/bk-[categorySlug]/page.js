import { productsData } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import SubcategorySidebar from '@/components/products/SidebarSubcategory';
import { Suspense } from 'react';

export const generateStaticParams = () => {
    const categories = [...new Set(productsData.map(p => p.categorySlug))];
    return categories.map(categorySlug => ({ categorySlug }));
};

export default function CategoryPage({ params, searchParams }) {
    const { categorySlug } = params;
    const selectedSub = searchParams.subcategory || 'all';
    const query = (searchParams.query || '').toLowerCase();

    const categoryProducts = productsData.filter(p => p.categorySlug === categorySlug);

    const subcategories = Array.from(new Set(categoryProducts.map(p => p.subcategorySlug).filter(Boolean)));
    const subcategoryCounts = subcategories.map(slug => ({
        slug,
        name: categoryProducts.find(p => p.subcategorySlug === slug)?.subcategory,
        count: categoryProducts.filter(p => p.subcategorySlug === slug).length
    }));

    const filteredProducts = categoryProducts.filter(p => {
        const matchesSub = selectedSub === 'all' || p.subcategorySlug === selectedSub || p.subcategorySlug === '';
        const matchesQuery = p.name.toLowerCase().includes(query);
        return matchesSub && matchesQuery;
    });

    const page = parseInt(searchParams.page || '1', 10);
    const perPage = 10;
    const paginated = filteredProducts.slice((page - 1) * perPage, page * perPage);
    const pageCount = Math.ceil(filteredProducts.length / perPage);

    return (
        <div className="container py-4">
            <div className="row">
                <div className="col-lg-3">
                    <SubcategorySidebar
                        categorySlug={categorySlug}
                        subcategories={subcategoryCounts}
                        selected={selectedSub}
                    />
                </div>
                <div className="col-lg-9">
                    <input
                        type="text"
                        name="query"
                        placeholder="Search products..."
                        defaultValue={searchParams.query || ''}
                        onChange={(e) => {
                            const url = new URL(window.location.href);
                            url.searchParams.set('query', e.target.value);
                            url.searchParams.set('page', '1');
                            window.location.href = url.toString();
                        }}
                        className="form-control mb-3"
                    />
                    <div className="row">
                        {paginated.map(product => (
                            <div className="col-md-4 mb-3" key={product.slug}>
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                    <div className="pagination">
                        {Array.from({ length: pageCount }, (_, i) => (
                            <a
                                key={i}
                                href={`?subcategory=${selectedSub}&query=${query}&page=${i + 1}`}
                                className={`btn btn-sm me-2 ${i + 1 === page ? 'btn-primary' : 'btn-outline-primary'}`}
                            >
                                {i + 1}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
