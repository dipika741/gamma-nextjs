"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-1">
        <div className="container">
          <div className="row">
            {/* Contact Section */}
            <div className="col-lg-4 width-25 mb-30">
              <h4 className="mb-30 color-gray-1000">Contact</h4>
              <div className="font-md mb-20 color-gray-900">
                <strong className="font-md-bold">Address:</strong> 42 Fladbury
                Crescent, Birmingham, B296PH
              </div>
              <div className="font-md mb-20 color-gray-900">
                <strong className="font-md-bold">Phone:</strong> +447767928598
              </div>
              <div className="font-md mb-20 color-gray-900">
                <strong className="font-md-bold">E-mail:</strong>{" "}
                info@gammasciuk.com
              </div>
              <div className="font-md mb-20 color-gray-900">
                <strong className="font-md-bold">Hours:</strong> 8:00 - 17:00,
                Mon - Sat
              </div>
              <div className="mt-30">
                <a className="icon-socials icon-facebook" href="#"></a>
                <a className="icon-socials icon-instagram" href="#"></a>
                <a className="icon-socials icon-twitter" href="#"></a>
                <a className="icon-socials icon-linkedin" href="#"></a>
              </div>
            </div>

            {/* Connect With Us */}
            <div className="col-lg-4 width-20 mb-30">
              <h4 className="mb-30 color-gray-1000">Connect with Us</h4>
              <ul className="menu-footer">
                <li>
                  <a href="#">Mission & Vision</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Press & Media</a>
                </li>
                <li>
                  <a href="#">Advertising</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="col-lg-4 width-16 mb-30">
              <h4 className="mb-30 color-gray-1000">Company</h4>
              <ul className="menu-footer">
                <li>
                  <a href="#">Our Blog</a>
                </li>
                <li>
                  <a href="#">Plans & Pricing</a>
                </li>
                <li>
                  <a href="#">Knowledge Base</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
                <li>
                  <a href="#">Office Center</a>
                </li>
                <li>
                  <a href="#">News & Events</a>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div className="col-lg-3 width-16 mb-30">
              <h4 className="mb-30 color-gray-1000">Products</h4>
              <ul className="menu-footer">
                <li>
                  <a href="#">Lab Equipment</a>
                </li>
                <li>
                  <a href="#">Lab Instruments</a>
                </li>
                <li>
                  <a href="#">Lab Consumables</a>
                </li>
                <li>
                  <a href="#">Chemicals</a>
                </li>
                <li>
                  <a href="#">Water Quality</a>
                </li>
                <li>
                  <a href="#">General Products</a>
                </li>
              </ul>
            </div>

            {/* Profile */}
            <div className="col-lg-3 width-23">
              <h4 className="mb-30 color-gray-1000">Profile</h4>
              <p className="font-md color-gray-900">
                With the key philosophy of providing high quality service and
                products at a competitive price, the company rapidly gained a
                loyal customer base which included some of Australia’s largest
                companies and scientific institutions. Many of whom still
                purchase from us today.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-2">
        <div className="footer-bottom-1">
          <div className="container">
            <div className="footer-2-top mb-20">
              <Link href="/">
                <img
                  className="h-50 w-50"
                  alt="Logo"
                  src="/assets/imgs/template/logo.png"
                />
              </Link>
              <a className="font-xs color-gray-1000" href="#">
                Analytical Instruments
              </a>
              <a className="font-xs color-gray-1000" href="#">
                Laboratory Equipment
              </a>
              <a className="font-xs color-gray-1000" href="#">
                Food and Beverage Testing Equipment
              </a>
              <a className="font-xs color-gray-1000" href="#">
                Laboratory Consumables
              </a>
            </div>

            <div className="footer-2-bottom">
              <div className="head-left-footer">
                <h6 className="color-gray-1000">Equipment:</h6>
              </div>
              <div className="tags-footer">
                {[
                  "Autoclave",
                  "CO2 Incubator",
                  "Drying Oven",
                  "Fume Hood",
                  "Laboratory Drugs Storage",
                  "Muffle Furnace",
                  "Laboratory Shaker",
                  "Multi Purpose Chamber",
                  "Refrigerate Chamber",
                  "Seed Related Equipment",
                  "Semiconductor",
                  "Shaking Incubator",
                  "Water Bath",
                  "Balances",
                  "Microscopes",
                  "Hotplates & Stirrers",
                  "Homogenizers",
                  "HD Videos Player",
                ].map((item, index) => (
                  <a href="#" key={index}>
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-2-bottom">
              <div className="head-left-footer">
                <h6 className="color-gray-1000">Category:</h6>
              </div>
              <div className="tags-footer">
                {[
                  "Bio Technology",
                  "Food and Beverage",
                  "Chromotography Consumables",
                  "Hospital Furnitures",
                  "Laboratory Consumables",
                  "Laboratory Plasticware",
                  "Laboratory equipment",
                  "Laboratory furniture",
                  "Laboratory Glassware",
                  "Laboratory Refrigerators",
                  "Material Testing Equipments",
                  "Medical Equipment",
                  "Nursing Consumables",
                ].map((item, index) => (
                  <a href="#" key={index}>
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
