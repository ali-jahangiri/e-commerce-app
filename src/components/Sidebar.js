import React from "react";

import Logo from "../components/Logo";
import Explore from "./Explore";

const SideBar = ({ category }) => {
  return (
    <div className="col-md-3 sidebar">
      <Logo />
      <Explore category={category} />
    </div>
  );
};

export default SideBar;
