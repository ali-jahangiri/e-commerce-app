import React from "react";
import SearchBox from "./Searchbox";
import ShopBasket from "./ShopBaket";

const Header = () => (
  <div className="header__container">
    <SearchBox />
    <ShopBasket />
  </div>
);

export default Header;
