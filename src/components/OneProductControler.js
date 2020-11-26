import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCardAction, incressItemAction } from "../store/orderReducer";
import arrayIncluds from "../utils/arrayIncluds";

const OneProductControler = ({
  item,
  addToCardAction,
  incressItemAction,
  orderList,
}) => {
  const [wasAdded, setWasAdded] = useState(false);
  const clickHandler = () => {
    setWasAdded(true);
    if (arrayIncluds(orderList, item.name)) addToCardAction(item);
    else incressItemAction(item.name);
    setTimeout(() => setWasAdded(false), 2000);
  };
  return (
    <div className="oneproduct__controler">
      <div
        onClick={clickHandler}
        className={`oneproduct__add ${wasAdded ? "oneproduct__wasadded" : ""}`}
      >
        <span className="oneproduct__text">add to card</span>
        <i className="fas fa-plus"></i>
        <i className="fa fa-shopping-cart"></i>
        <div className="oneproduct__dot"></div>
      </div>
      <div className="oneproduct__price">
        <p>{item.price}</p>
        <span>$</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ orderList: state.order });

export default connect(mapStateToProps, { addToCardAction, incressItemAction })(
  OneProductControler
);
