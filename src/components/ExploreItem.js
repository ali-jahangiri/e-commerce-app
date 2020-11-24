import React from "react";

const icons = [
  "fas fa-hat-cowboy-side",
  "fas fa-shoe-prints",
  "fas fa-tshirt",
  "fas fa-female",
  "fas fa-male",
];

const ExploreItem = ({ categoryName, index }) => (
  <div className="explore__item">
    {icons.map((icon, num) =>
      num === index ? <i key={index} className={icon} /> : null
    )}
    <p>{categoryName}</p>
  </div>
);

export default ExploreItem;
