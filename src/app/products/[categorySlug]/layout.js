'use client';

import SidebarSubcategory from '@/components/products/SidebarSubcategory';
import { usePathname, useParams } from 'next/navigation';
import { productsData } from '@/data/products';

export default function CategoryLayout({ children }) {
    const pathname = usePathname();
    const params = useParams();

    const categorySlug = params?.categorySlug;

    // Early return if params not ready yet
    if (!categorySlug) {
        return null; // or a loading spinner if you want
    }

    const isProductDetail = pathname.split('/').length > 5;

    const subcategories = productsData
        .filter((p) => p.categorySlug === categorySlug && p.subcategory)
        .reduce((acc, curr) => {
            const key = curr.subcategorySlug;
            if (!acc[key]) {
                acc[key] = {
                    name: curr.subcategory,
                    slug: key,
                    count: 1,
                };
            } else {
                acc[key].count++;
            }
            return acc;
        }, {});

    const subcategoryList = Object.values(subcategories);

    return (
        <div className="container mt-4">
            <div className="row">
                {!isProductDetail && (
                    <div className="col-md-3">
                        <SidebarSubcategory
                            categorySlug={categorySlug}
                            subcategories={subcategoryList}
                        />
                    </div>
                )}
                <div className={isProductDetail ? 'col-12' : 'col-md-9'}>
                    {children}
                </div>
            </div>
        </div>
    );
}
