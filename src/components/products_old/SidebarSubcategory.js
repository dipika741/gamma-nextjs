// src/components/products/SidebarSubcategoryFilter.js

import { productsData } from '@/data/products';

const SidebarSubcategoryFilter = ({ categorySlug }) => {
    // Check for valid categorySlug
    if (!categorySlug) {
        return <p>No category selected</p>;
    }

    const subcategories = productsData
        .filter((product) => product.categorySlug === categorySlug && product.subcategorySlug)
        .map((product) => product.subcategorySlug);

    const uniqueSubcategories = [...new Set(subcategories)];

    return (
        <div>
            <h2 className="font-bold text-lg">Subcategories</h2>
            <ul>
                {uniqueSubcategories.map((subcategory) => {
                    const productCount = productsData.filter(
                        (product) => product.subcategorySlug === subcategory && product.categorySlug === categorySlug
                    ).length;

                    return (
                        <li key={subcategory}>
                            <a href={`/products/${categorySlug}/${subcategory}`}>
                                {subcategory} ({productCount})
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SidebarSubcategoryFilter;
