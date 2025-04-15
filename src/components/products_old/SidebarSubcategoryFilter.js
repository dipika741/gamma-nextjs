'use client';

export default function SidebarSubcategoryFilter({
    subcategories,
    selectedSubcategory,
    totalProducts,
    onSelect,
}) {
    return (
        <div className="mb-4">
            <h5 className="mb-3">Filter by Subcategory</h5>
            <ul className="list-group">
                <li
                    className={`list-group-item ${selectedSubcategory === 'all' ? 'active' : ''}`}
                    onClick={() => onSelect('all')}
                    style={{ cursor: 'pointer' }}
                >
                    All ({totalProducts})
                </li>
                {subcategories.map((sub) => (
                    <li
                        key={sub.slug}
                        className={`list-group-item ${selectedSubcategory === sub.slug ? 'active' : ''}`}
                        onClick={() => onSelect(sub.slug)}
                        style={{ cursor: 'pointer' }}
                    >
                        {sub.name} ({sub.count})
                    </li>
                ))}
            </ul>
        </div>
    );
}
