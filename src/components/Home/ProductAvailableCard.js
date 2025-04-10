"use client";

import React from "react";
import Link from "next/link";

// Helper to create slug from name
const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const ProductAvailableCard = ({
  name,
  category,
  image,
  discount,
  available,
  sold,
  description,
}) => {
  const categorySlug = slugify(category);
  const productSlug = slugify(name);

  return (
    <div className="card-grid-style-3 hover-show hover-hide-show-cart">
      <div className="card-grid-inner">
        <div className="tools">
          <button className="btn btn-wishlist btn-tooltip mb-10" aria-label="Add To Wishlist"></button>
          <button className="btn btn-compare btn-tooltip mb-10" aria-label="Compare"></button>
          <a
            className="btn btn-quickview btn-tooltip"
            aria-label="Quick view"
            href="#ModalQuickview"
            data-bs-toggle="modal"
          ></a>
        </div>

        <div className="image-box">
          <span className="label bg-brand-2">{discount}</span>
          <Link href={`/${categorySlug}/${productSlug}`}>
            <img src={`/${image}`} alt={name} />
          </Link>
        </div>

        <div className="info-right">
          <span className="font-xs color-gray-500">{category}</span>
          <br />
          <Link className="color-brand-3 font-sm-bold" href={`/${categorySlug}/${productSlug}`}>
            {name}
          </Link>

          <div className="box-progress box-progress-small">
            <div className="progress-bar">
              <div className="progress-bar-inner"></div>
            </div>
            <div className="row">
              <div className="col-6">
                <span className="font-xs color-gray-500">Available:</span>
                <span className="font-xs-bold color-gray-900">{available}</span>
              </div>
              <div className="col-6 text-end">
                <span className="font-xs color-gray-500">Sold:</span>
                <span className="font-xs-bold color-gray-900">{sold}</span>
              </div>
            </div>
          </div>

          <div className="mt-20 box-add-cart">
            <Link className="btn btn-cart" href={`/${categorySlug}/${productSlug}`}>
              more..
            </Link>
          </div>

          <ul className="list-features">
            <li>{description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductAvailableCard;
