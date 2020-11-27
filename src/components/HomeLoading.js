import React from "react";

const HomeLoading = ({ isLoading }) => {
  console.log(isLoading);
  return (
    <div className={`loading ${!isLoading && "loading--fade"}`}>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default HomeLoading;
