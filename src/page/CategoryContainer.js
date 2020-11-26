import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import ProductsBox from "../components/Productbox";

import selectePiceOfProduct from "../store/Selectors/selectePiceOfProduct";

const CategoryContainer = ({ products, history, match }) => {
  const [isGonnaBack, setIsGonnaBack] = useState(false);
  const otherCategoryHandler = () => {
    setIsGonnaBack(true);
    setTimeout(() => {
      history.push("/");
    }, 200);
  };
  if (products.length) {
    const { title, items } = products[0];
    return (
      <div className="container">
        <div className="row">
          <div
            style={{ overflow: isGonnaBack && "hidden" }}
            className="col-md-12"
          >
            <div
              className={`category__container ${
                isGonnaBack ? "category__container--comeback " : ""
              }`}
            >
              <div className="category__container--header">
                <p className="">{title}</p>
                <p onClick={otherCategoryHandler}>other category</p>
              </div>
              <div className="row">
                {items.map((el, index) => (
                  <ProductsBox
                    category={match.params.category}
                    key={index}
                    value={el}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    //when user refresh the page no product find
  } else return <Redirect to="/" />;
};

const mapStateToProps = (
  state,
  {
    match: {
      params: { category },
    },
  }
) => ({
  products: selectePiceOfProduct(state, category),
});
export default connect(mapStateToProps)(CategoryContainer);
