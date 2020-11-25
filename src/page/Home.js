import React, { useEffect } from "react";
import { connect } from "react-redux";
import CategoryDirectory from "../components/CategoryDiectory";
import Header from "../components/Header";
import SideBar from "../components/Sidebar";

import { fetchDataAction } from "../store/productsReducer";

//selectors
import selecteCategory from "../store/Selectors/SelecteCategory";

const HomePage = ({ category, fetchDataAction }) => {
  useEffect(() => {
    fetchDataAction();
  }, [fetchDataAction]);
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <SideBar category={category} />
        <div className="col-md-9">
          <Header />
          <CategoryDirectory category={category} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  category: selecteCategory(state),
});
export default connect(mapStateToProps, { fetchDataAction })(HomePage);
