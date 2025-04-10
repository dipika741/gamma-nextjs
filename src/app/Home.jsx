import React from "react";
import MetaTags from "../components/MetaTags.js";
import Slider from "../components/Home/Slider.jsx";
import Services from "../components/Services.jsx";
import Card from "../components/Home/Card.jsx";
import ProductSection from "../components/Home/ProductSection.jsx";
import ProductTabs from "../components/Home/ProductTabs.jsx";
import { laboratoryProducts, clothing } from "../data/products.js"; // Import individual categories
export default function Home() {
  return (
    <div className="">
      <MetaTags
        title="Gamma Scientific Ltd"
        description="Welcome to our homepage with amazing products."
        keywords="home, products, best deals"
      />
      <main className="main">
        <Slider />
        <Services />
        <Card />
        <ProductSection
          title="Laboratory Equipments"
          products={laboratoryProducts}
        />
        <ProductTabs title="Clothing" products={clothing} />

        {/* <section className="section-box mt-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="block-ads-1">
                  <h4 className="color-gray-1000 mb-10">
                    Wine Testing
                    <br className="d-none d-lg-block" /> Equipments
                  </h4>
                  <p className="color-border-1">Available Here</p>
                  <div className="mt-25">
                    <a className="btn btn-brand-2 btn-arrow-right" href="#l">
                      Get it
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="block-ads-2">
                  <h4 className="color-gray-1000 mb-10">
                    Best food &amp; Beverage
                    <br className="d-none d-lg-block" />
                    Testing Equipment
                  </h4>
                  <p className="color-border-1">For your Testing Lab</p>
                  <div className="mt-25">
                    <a className="btn btn-brand-2 btn-arrow-right" href="#l">
                      Get it
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="section-box mt-50">
          <div className="container">
            <div className="head-main">
              <h3 className="mb-5">New Releases</h3>
              <h3>
                <div className="box-button-slider">
                  <div className="swiper-button-next swiper-button-next-group-4" />
                  <div className="swiper-button-prev swiper-button-prev-group-4" />
                </div>
              </h3>
            </div>
          </div>
          <div className="container mt-10">
            <div className="box-swiper">
              <div className="swiper-container swiper-group-4">
                <div className="swiper-wrapper pt-5">
                  <div className="swiper-slide">
                    <div className="card-grid-style-1">
                      <div className="image-box">
                        <a href="#" />
                        <img
                          src="<?php echo ASSETS_URL; ?>imgs/page/category/glasswasher.jpg"
                          alt="glasswasher"
                        />
                      </div>
                      <a className="tag-dot font-xs" href="#">
                        Laboratory{" "}
                      </a>
                      <a className="color-gray-1100" href="#">
                        <h4>Laboratory Glasswasher</h4>
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card-grid-style-1">
                      <div className="image-box">
                        <a href="#" />
                        <img
                          src="<?php echo ASSETS_URL; ?>imgs/page/category/HPLC column.jpg"
                          alt="#"
                        />
                      </div>
                      <a className="tag-dot font-xs" href="#">
                        HPLC Column
                      </a>
                      <a className="color-gray-1100" href="#">
                        <h4>HPLC Column and other Consumables</h4>
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card-grid-style-1">
                      <div className="image-box">
                        <a href="#" />
                        <img
                          src="<?php echo ASSETS_URL; ?>imgs/page/category/laboratory chairs.jpg"
                          alt="#"
                        />
                      </div>
                      <a className="tag-dot font-xs" href="#">
                        Lab Furnitures
                      </a>
                      <a className="color-gray-1100" href="#">
                        <h4>Laboratory Chairs</h4>
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card-grid-style-1">
                      <div className="image-box">
                        <a href="#" />
                        <img
                          src="<?php echo ASSETS_URL; ?>imgs/page/category/Hydrogen Generators.jpg"
                          alt="#"
                        />
                      </div>
                      <a className="tag-dot font-xs" href="#">
                        Lab Generators
                      </a>
                      <a className="color-gray-1100" href="#">
                        <h4>Hydrogen Generators</h4>
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card-grid-style-1">
                      <div className="image-box">
                        <a href="#" />
                        <img
                          src="<?php echo ASSETS_URL; ?>imgs/page/category/HPLC Solvent Safety Products.jpg"
                          alt="#"
                        />
                      </div>
                      <a className="tag-dot font-xs" href="#">
                        HPLC Solvent
                      </a>
                      <a className="color-gray-1100" href="#">
                        <h4>HPLC Solvent Safety Products</h4>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
