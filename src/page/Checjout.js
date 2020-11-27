import React, { Fragment } from "react";
import { connect } from "react-redux";
import CheckoutEmpty from "../components/CheckoutEmpty";
import CheckoutItem from "../components/CheckoutItem";
import Navigation from "../components/Navigation";

import getTotalMount from "../utils/getTotalMount";
const Checkout = ({ order }) => {
  const checker = () => {
    if (!order.length) return <CheckoutEmpty />;
    else
      return (
        <Fragment>
          <Navigation />
          <div className="row">
            <div className="checkout__title col-md-12">
              <p>Checkout</p>
            </div>
            {order.map((el, index) => (
              <CheckoutItem value={el} key={index} />
            ))}
          </div>
          <div className="checkout__total">
            <p>Total : {getTotalMount(order)}$</p>
          </div>
        </Fragment>
      );
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">{checker()}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ order: state.order });

export default connect(mapStateToProps)(Checkout);
