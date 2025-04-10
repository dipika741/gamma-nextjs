import React from "react";

const services = [
  {
    id: 1,
    icon: "/assets/imgs/template/delivery.svg",
    title: "Import and Exports",
    description: "",
  },
  {
    id: 2,
    icon: "/assets/imgs/template/support.svg",
    title: "Support 24/7",
    description: "Shop with an expert",
  },
  {
    id: 3,
    icon: "/assets/imgs/template/voucher.svg",
    title: "Gift voucher",
    description: "Refer a friend",
  },
  {
    id: 4,
    icon: "/assets/imgs/template/return.svg",
    title: "Return & Refund",
    description: "",
  },
];

const Services = () => {
  return (
    <section className="section-box mt-50 mb-50">
      <div className="container">
        <ul className="list-col-5">
          {services.map((service) => (
            <li key={service.id}>
              <div className="item-list">
                <div className="icon-left">
                  <img src={service.icon} alt="Service Icon" />
                </div>
                <div className="info-right">
                  <h5 className="font-lg-bold color-gray-100">
                    {service.title}
                  </h5>
                  {service.description && (
                    <p className="font-sm color-gray-500">
                      {service.description}
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
