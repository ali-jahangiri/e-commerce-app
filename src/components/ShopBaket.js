import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const ShopBasket = ({ sum, history }) => (
  <div
    onClick={() => history.push("/checkout")}
    className="shop-basket__container"
  >
    <i className="fas fa-shopping-cart"></i>
    <span>{sum}</span>
  </div>
);

const mapStateToProps = (state) => ({ sum: state.order.length });

export default withRouter(connect(mapStateToProps)(ShopBasket));
