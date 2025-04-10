import React from "react";
import Image from "next/image";
import SEO from "@/components/seo";

export const metadata = {
    title: "Our Services | Delta Scientific",
    description: "Explore the wide range of services offered by Delta Scientific to support laboratories and industries.",
};

const servicesList = [
    {
        title: "Installation & Setup",
        description: "Expert setup and calibration of all laboratory equipment to ensure optimal performance from day one.",
        icon: "/assets/imgs/icons/setup.svg",
    },
    {
        title: "Maintenance & Repairs",
        description: "Scheduled maintenance and on-call repair services to keep your instruments running efficiently.",
        icon: "/assets/imgs/icons/maintenance.svg",
    },
    {
        title: "Calibration Services",
        description: "Certified calibration for analytical and testing instruments with traceable documentation.",
        icon: "/assets/imgs/icons/calibration.svg",
    },
    {
        title: "Training & Support",
        description: "Hands-on training and technical support to ensure your team can confidently operate the equipment.",
        icon: "/assets/imgs/icons/training.svg",
    },
];

export default function ServicesPage() {
    return (
        <>
            <SEO title={metadata.title} description={metadata.description} />

            <section className="pt-60 pb-60 bg-light">
                <div className="container">
                    <div className="text-center mb-50">
                        <h1 className="display-5">Our Services</h1>
                        <p className="lead text-muted">
                            Comprehensive support from purchase to performance.
                        </p>
                    </div>

                    <div className="row">
                        {servicesList.map((service, index) => (
                            <div key={index} className="col-md-6 col-lg-3 mb-4">
                                <div className="card h-100 text-center shadow-sm p-3 border-0">
                                    <Image
                                        src={service.icon}
                                        alt={service.title}
                                        width={60}
                                        height={60}
                                        className="mx-auto mb-3"
                                    />
                                    <h5 className="fw-bold">{service.title}</h5>
                                    <p className="text-muted small">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
