"use client";

import Link from "next/link";
import { categories } from "@/data/products";
import slugify from "@/utils/slugify";

const Menubar = () => {
  return (
    <>
      {/* Desktop Header */}
      <header className="h-menubar header sticky-bar">
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link href="/" className="d-flex">
                  <img src="/assets/imgs/template/logo.png" alt="Logo" />
                </Link>
              </div>
              <div className="header-nav">
                <nav className="nav-main-menu d-none d-xl-block">
                  <ul className="main-menu">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>

                    <li className="has-children">
                      <Link href="#">Products</Link>
                      <ul className="sub-menu">
                        {categories.map((category) => (
                          <li key={category}>
                            <Link href={`/products/${slugify(category)}`}>
                              {category}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>

                    {/* <li className="has-children">
                      <Link href="#">Products</Link>
                      <ul className="sub-menu">
                        {categories.map((cat) => (
                          <li key={cat}>
                            <Link href={`/products/category/${slugify(cat)}`}>
                              {cat}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li> */}

                    {/* <li className="has-children">
                      <Link href="#">Products</Link>
                      <ul className="sub-menu">
                        {categories.map((category) => (
                          <li key={category}>
                            <Link href={`/products/category/${slugify(category)}`}>
                              {category}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li> */}

                    {/* <li className="has-children">
                      <Link href="#">Products</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/laboratory-equipment">
                            Laboratory Equipment
                          </Link>
                        </li>
                        <li>
                          <Link href="/analytical-instruments">
                            Analytical Instruments
                          </Link>
                        </li>
                        <li>
                          <Link href="/material-testing-equipments">
                            Material Testing Equipment
                          </Link>
                        </li>
                        <li>
                          <Link href="/chromotography-consumables">
                            HPLC Consumables
                          </Link>
                        </li>
                        <li>
                          <Link href="/laboratory-glassware">
                            Laboratory Glasswares
                          </Link>
                        </li>
                        <li>
                          <Link href="/laboratory-plasticware">
                            Laboratory Plasticwares
                          </Link>
                        </li>
                        <li>
                          <Link href="/laboratory-furniture">
                            Laboratory Furnitures
                          </Link>
                        </li>
                        <li>
                          <Link href="#">Food Testing Equipment</Link>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <Link href="/downloads">Downloads</Link>
                    </li>
                    <li>
                      <Link href="/contact_us">Contact Us</Link>
                    </li>
                  </ul>
                </nav>

                <div className="burger-icon burger-icon-white">
                  <span className="burger-icon-top"></span>
                  <span className="burger-icon-mid"></span>
                  <span className="burger-icon-bottom"></span>
                </div>
              </div>

              <div className="header-shop">
                <div className="d-inline-block box-dropdown-cart">
                  <span className="font-lg icon-list icon-account">
                    <span>Brands</span>
                  </span>
                </div>
                <Link href="#" className="font-lg icon-list icon-wishlist">
                  <span>Promotions</span>
                </Link>
              </div>

              <Link href="#" className="font-lg icon-list icon-compare">
                <span>News</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="mobile-logo">
              <Link href="/" className="d-flex">
                <img src="/assets/imgs/template/logo.svg" alt="Mobile Logo" />
              </Link>
            </div>

            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav className="mt-15">
                  <ul className="mobile-menu font-heading">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li className="has-children">
                      <Link href="#">Products</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/laboratory-equipment">
                            Laboratory Equipment
                          </Link>
                        </li>
                        <li>
                          <Link href="/analytical-instruments">
                            Analytical Instruments
                          </Link>
                        </li>
                        <li>
                          <Link href="/material-testing-equipments">
                            Material Testing Equipment
                          </Link>
                        </li>
                        <li>
                          <Link href="/chromotography-consumables">
                            HPLC Consumables
                          </Link>
                        </li>
                        <li>
                          <Link href="/laboratory-glassware">
                            Laboratory Glasswares
                          </Link>
                        </li>
                        <li>
                          <Link href="/laboratory-plasticware">
                            Laboratory Plasticwares
                          </Link>
                        </li>
                        <li>
                          <Link href="/laboratory-furniture">
                            Laboratory Furnitures
                          </Link>
                        </li>
                        <li>
                          <Link href="#">Food Testing Equipment</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <Link href="/downloads">Downloads</Link>
                    </li>
                    <li>
                      <Link href="/contact_us">Contact Us</Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="mobile-banner">
                <div className="bg-5 block-iphone">
                  <span className="color-brand-3 font-sm-lh32">
                    Starting from $500
                  </span>
                  <h3 className="font-xl mb-10">LABORATORY GENERATORS</h3>
                  <p className="font-base color-brand-3 mb-10">
                    Special offers
                  </p>
                  <Link href="#" className="btn btn-arrow">
                    more..
                  </Link>
                </div>
              </div>

              <div className="site-copyright color-gray-400 mt-30">
                Copyright 2024 &copy; Delta Scientific.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menubar;
