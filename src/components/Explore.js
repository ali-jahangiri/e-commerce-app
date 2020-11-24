import React from "react";
import ExploreItem from "./ExploreItem";

const Explore = ({ category }) => {
  return (
    <div className="explore">
      <p>Explore</p>
      {category.map((el, index) => (
        <ExploreItem key={index} categoryName={el} index={index} />
      ))}
    </div>
  );
};

export default Explore;
