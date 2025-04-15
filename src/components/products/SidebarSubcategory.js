import Link from 'next/link';

export default function SidebarSubcategory({ categorySlug, subcategories = [] }) {
    if (!subcategories.length) {
        return <p>No subcategories found.</p>;
    }

    return (
        <div>
            <h5>Subcategories</h5>
            <ul className="list-group">
                {subcategories.map((sub) => (
                    <li key={sub.slug} className="list-group-item d-flex justify-content-between align-items-center">
                        <Link href={`/products/${categorySlug}/${sub.slug}`}>
                            {sub.name}
                        </Link>
                        <span className="badge bg-primary rounded-pill">{sub.count}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
