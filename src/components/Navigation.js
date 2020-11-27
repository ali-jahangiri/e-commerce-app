import React from "react";
import { withRouter } from "react-router-dom";

const Navigation = ({ history, category }) => (
  <div className="navigation">
    {category && (
      <p onClick={() => history.goBack()}>go back to {category} category</p>
    )}
    <p onClick={() => history.push("/")}>Home</p>
  </div>
);

export default withRouter(Navigation);
