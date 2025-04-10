import React from "react";

const ProductAvailableCard = ({
  name,
  category,
  image,
  discount,
  available,
  sold,
  description,
}) => {
  return (
    <div className="card-grid-style-3 hover-show hover-hide-show-cart">
      <div className="card-grid-inner">
        <div className="tools">
          <a
            className="btn btn-wishlist btn-tooltip mb-10"
            href="#"
            aria-label="Add To Wishlist"
          ></a>
          <a
            className="btn btn-compare btn-tooltip mb-10"
            href="#"
            aria-label="Compare"
          ></a>
          <a
            className="btn btn-quickview btn-tooltip"
            aria-label="Quick view"
            href="#ModalQuickview"
            data-bs-toggle="modal"
          ></a>
        </div>
        <div className="image-box">
          <span className="label bg-brand-2">{discount}</span>
          <a href="#">
            <img src={image} alt={name} />
          </a>
        </div>
        <div className="info-right">
          <span className="font-xs color-gray-500">{category}</span>
          <br />
          <a className="color-brand-3 font-sm-bold" href="#">
            {name}
          </a>
          <div className="box-progress box-progress-small">
            <div className="progress-bar">
              <div className="progress-bar-inner"></div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <span className="font-xs color-gray-500">Available:</span>
                <span className="font-xs-bold color-gray-900">{available}</span>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                <span className="font-xs color-gray-500">Sold:</span>
                <span className="font-xs-bold color-gray-900">{sold}</span>
              </div>
            </div>
          </div>
          <div className="mt-20 box-add-cart">
            <a className="btn btn-cart" href="#">
              more..
            </a>
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
