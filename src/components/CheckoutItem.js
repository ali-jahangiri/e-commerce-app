import React from "react";
import { connect } from "react-redux";

import { removeFromCardAction } from "../store/orderReducer";

const CheckoutItem = ({ value, removeFromCardAction }) => {
  const { name, count, imageUrl } = value;
  return (
    <div className="col-md-4 col-sm-4 col-lg-3">
      <div className="checkout__item">
        <div className="checkout__item--img">
          <img src={imageUrl} alt={name} />
          <div
            onClick={() => removeFromCardAction(name)}
            className="checkout__item--delete"
          >
            <i className="far fa-trash-alt"></i>
          </div>
        </div>
        <div className="checkout__item--info">
          <p>{name}</p>
          <p>{count}x</p>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { removeFromCardAction })(CheckoutItem);
