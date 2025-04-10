"use client";

import Seo from "@/components/seo";

export default function AboutPage() {
    return (
        <>
            <Seo
                title="About Us - Gamma Scientific Instruments"
                description="Learn more about Gamma Scientific Instruments, a leading UK-based supplier of scientific and laboratory equipment."
                canonical="https://www.yourdomain.com/about"
                keywords="about Gamma Scientific Instruments, scientific equipment UK, laboratory supplier"
            />

            <div className="container py-5">
                <h1>About Us</h1>
                <p>
                    Welcome to Gamma Scientific Instruments. We are committed to delivering high-quality scientific, laboratory, and testing equipment to researchers, educators, and professionals across the UK.
                </p>
                {/* Add more about content here */}
            </div>
        </>
    );
}
