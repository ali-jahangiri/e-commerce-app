import React from "react";
import { connect } from "react-redux";

const ShopBasket = ({ sum }) => {
  return (
    <div className="shop-basket__container">
      <i className="fas fa-shopping-cart"></i>
      <span>{sum}</span>
    </div>
  );
};
ShopBasket.defaultProps = {
  sum: 6,
};
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(ShopBasket);
