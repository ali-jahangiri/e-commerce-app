import React from "react";
import { withRouter } from "react-router-dom";

const CategoryDirecItem = ({ history, value }) => (
  <div
    className="category__drc--item"
    onClick={() => history.push(`category/${value.toLowerCase()}`)}
  >
    <p>{value}</p>
  </div>
);

export default withRouter(CategoryDirecItem);
