import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ProductTabs = ({ title, products }) => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts =
    activeTab === "all" ? products : products.filter((p) => p.isBestseller);

  return (
    <div className="container mt-50">
      <div className="head-main bd-gray-200">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <h3 className="mb-5">{title}</h3>
            <p className="font-base color-gray-500">
              Special products in this products
            </p>
          </div>
          <div className="col-xl-6 col-lg-6">
            <ul className="nav nav-tabs text-uppercase pr-100" role="tablist">
              <li>
                <a
                  className={`${activeTab === "all" ? "active" : ""}`}
                  href="#tab-3-all"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-controls="tab-3-all"
                  aria-selected="true"
                  data-index={1}
                  onClick={() => setActiveTab("all")}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  href="#tab-3-bestseller"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-controls="tab-3-bestseller"
                  aria-selected="false"
                  data-index={2}
                  onClick={() => setActiveTab("bestseller")}
                  className={`${activeTab === "bestseller" ? "active" : ""}`}
                >
                  Best seller
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="product-tabs">
        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1400: { slidesPerView: 5 },
          }}
          className="product-slider"
        >
          {filteredProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="card-grid-style-3 mt-2">
                <div className="card-grid-inner">
                  <div className="tools">
                    <a
                      className="btn btn-trend btn-tooltip mb-10"
                      href="#"
                      aria-label="Trend"
                      data-bs-placement="left"
                    />
                    <a
                      className="btn btn-wishlist btn-tooltip mb-10"
                      href="#"
                      aria-label="86°C Ultra Low Temperature Freezer"
                    />
                    <a
                      className="btn btn-compare btn-tooltip mb-10"
                      href="#"
                      aria-label="Compare"
                    />
                    <a
                      className="btn btn-quickview btn-tooltip"
                      aria-label="Quick view"
                      href="#ModalQuickview"
                      data-bs-toggle="modal"
                    />
                  </div>
                  <div className="image-box">
                    <span className="label bg-brand-2">-19%</span>
                    <a href="#">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="product-img"
                      />
                    </a>
                  </div>
                  <div className="info-right">
                    <a className="font-xs color-gray-500" href="#">
                      Laboratory Regrigirator
                    </a>
                    <br />
                    <a className="color-brand-3 font-sm-bold" href="#">
                      {product.name}
                    </a>
                    <div className="mt-20 box-btn-cart">
                      <a className="btn btn-cart" href="#">
                        more
                      </a>
                    </div>
                    {product.isBestseller && (
                      <span className="bestseller-badge">★ Bestseller</span>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductTabs;
