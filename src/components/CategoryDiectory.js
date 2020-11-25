import React from "react";
import getTwoElEnd from "../utils/getTwoLastElOfArray";
import CategoryDirecItem from "./CategoryDirecItem";

const CategoryDirectory = ({ category }) => {
  return (
    <div className="col-md-12">
      <div className="row">
        <div className="col-md-6 category__dirc--vertical">
          {category.slice(0, 2).map((el, index) => (
            <CategoryDirecItem value={el} key={index}></CategoryDirecItem>
          ))}
        </div>
        <div className="col-md-6 category__dirc--onecol">
          <CategoryDirecItem value={category[category.indexOf("Jackets")]} />
        </div>
        <div className="col-md-12 category__dirc--horizontal">
          {getTwoElEnd(category).map((el, index) => (
            <CategoryDirecItem key={index} value={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDirectory;
