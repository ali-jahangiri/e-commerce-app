import React from "react";
import { withRouter } from "react-router-dom";

const ProductsBox = ({ value, index, history, category }) => {
  const { imageUrl, price, name, id } = value;
  return (
    <div className="col-md-4 col-sm-6 col-lg-4 col-xl-3 ">
      <div
        onClick={() => history.push(`/product/${category}/${id}`)}
        style={{ animationDelay: `${index * 150}ms` }}
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

export default withRouter(ProductsBox);
