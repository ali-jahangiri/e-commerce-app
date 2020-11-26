import React from "react";

const ProductsBox = ({ value, index }) => {
  const { imageUrl, price, name } = value;
  return (
    <div className="col-md-4 col-sm-6 col-lg-4 col-xl-3 ">
      <div
        style={{ animationDelay: `${index * 10}ms` }}
        className="productsbox"
      >
        <div className="productsbox__img">
          <img className="img-rsp" src={imageUrl} alt={name} />
        </div>
        <div className="productsbox__info">
          <p>{name}</p>
          <p>{price}$</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsBox;
