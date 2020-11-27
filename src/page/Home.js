import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import CategoryDirectory from "../components/CategoryDiectory";
import Header from "../components/Header";
import HomeLoading from "../components/HomeLoading";
import SideBar from "../components/Sidebar";

import { fetchDataAction } from "../store/productsReducer";

//selectors
import selecteCategory from "../store/Selectors/SelecteCategory";

const HomePage = ({ category, fetchDataAction, loading }) => {
  console.log(loading);
  useEffect(() => {
    if (!category.length) {
      fetchDataAction();
    }
  }, [fetchDataAction, category.length]);
  return (
    <Fragment>
      <HomeLoading isLoading={loading} />
      <div className="container-fluid">
        <div className="row mt-5">
          <SideBar category={category} />
          <div className="col-md-9">
            <Header />
            <CategoryDirectory category={category} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  category: selecteCategory(state),
  loading: state.products.loading,
});
export default connect(mapStateToProps, { fetchDataAction })(HomePage);
