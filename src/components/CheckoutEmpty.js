import React from "react";
import { Link } from "react-router-dom";

const CheckoutEmpty = () => (
  <div className="checkout__empty">
    <p>
      Your checkout is Empty , <Link to="/">Explore categorys</Link>
    </p>
  </div>
);

export default CheckoutEmpty;
