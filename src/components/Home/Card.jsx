import React from "react";

const services = [
  {
    title: "Labratory Equipment",
    description: "Comprehensive Laboratory Product",
    features: [
      "Laboratory Consumables & Equipments",
      "Laboratory Glassware",
      "Laboratory Plasticware",
      "Laboratory Furniture",
      "Laboratory Refrigerators",
    ],
    className: "bg-19 block-1",
  },
  {
    title: "Medical & Hospital Equipment",
    description: "Consumables & Equipments",
    features: [
      "Medical & Hospital Equipments/Consumables",
      "Hospital Furnishings",
    ],
    link: "#",
    className: "bg-20 block-2",
  },
  {
    title: "Chromatography",
    description: "Chromatography Consumables & Equipments",
    link: "#",
    className: "bg-21 block-3",
  },
  //   {
  //     title: "Analtical Instrumens",
  //     description:
  //       "Analytical instruments include mass spectrometers, chromatographs (e.g. GC and HPLC), titrators, spectrometers (e.g. AAS, X-ray, and fluorescence), particle size analyzers, rheometers, elemental analyzers (e.g. salt analyzers, CHN analyzers), thermal analyzers..",
  //     link: "#",
  //     className: "bg-21",
  //   },
  //   {
  //     title: "Biotechnology Lab Products",
  //     description:
  //       "ChWe are the best supplier of 96 Well Plate Centrifuge With Modern Microprocessor, Autoclave,Vertical,Biological Safety Cabinet,Blood Bank Refrigerators,Centrifuge 15000 Rpm,Clinica",
  //     link: "#",
  //     className: "bg-20 block-2",
  //   },
  //   {
  //     title: "Educational Lab ",
  //     description:
  //       "Metaverse scientific supply the laboratory equipment for the school labs of primary school labs Between standard 5 to 8, students get the knowledge of the basic lab practice and get to know about their uses..",
  //     link: "#",
  //     className: "bg-19 block-3",
  //   },
];

const Card = () => {
  return (
    <section className="section-box">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-30"
            >
              <div className={`pt-30 box-bdrd-4 ${service.className}`}>
                <h3 className="font-xl mb-10">{service.title}</h3>
                <p className="font-16 color-brand-3 mb-10">
                  {service.description}
                </p>
                {service.features && (
                  <ul className="list-disc mt-10">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="font-11">
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
                {service.link && (
                  <a
                    className="btn btn-link font-xs pl-0 text-uppercase color-brand-1"
                    href={service.link}
                  >
                    learn more
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
