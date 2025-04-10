import React from "react";
import ProductAvailableCard from "./ProductAvailableCard";

const ProductSection = ({ title, products }) => {
  return (
    <section className="section-box pt-50">
      <div className="container">
        <div className="bg-9 box-bdrd-4 pt-35 pb-35 pl-25 pr-25">
          <div className="head-main">
            <div className="row">
              <div className="col-lg-6">
                <div className="box-icon-flash">
                  <h3 className="mb-5">{title}</h3>
                  <p className="font-16 font-bold color-gray-900">
                    The opportunity will quickly pass. Take it!
                  </p>
                </div>
              </div>
              <div className="col-lg-6 text-end">
                <div className="box-all-hurry box-all-hurry-round">
                  <div className="d-inline-block box-text-hurryup">
                    <span className="font-md-bold color-gray-900">
                      Hurry up!
                    </span>
                    <br />
                    <span className="font-xs color-gray-500">
                      Offers end in:
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-0">
            <div className="list-products-5">
              {products.map((product, index) => (
                <ProductAvailableCard key={index} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
