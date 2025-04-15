"use client";

import Link from "next/link";

export default function Pagination({ total, currentPage }) {
    const PRODUCTS_PER_PAGE = 10;
    const totalPages = Math.ceil(total / PRODUCTS_PER_PAGE);

    if (totalPages <= 1) return null;

    const prevPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;

    return (
        <nav className="mt-4">
            <ul className="pagination justify-content-center">
                {prevPage && (
                    <li className="page-item">
                        <Link
                            className="page-link"
                            href={`?page=${prevPage}`}
                        >
                            Previous
                        </Link>
                    </li>
                )}
                {Array.from({ length: totalPages }, (_, i) => (
                    <li key={i + 1} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                        <Link
                            className="page-link"
                            href={`?page=${i + 1}`}
                        >
                            {i + 1}
                        </Link>
                    </li>
                ))}
                {nextPage && (
                    <li className="page-item">
                        <Link
                            className="page-link"
                            href={`?page=${nextPage}`}
                        >
                            Next
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}
