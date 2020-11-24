import React, { useEffect } from "react";
import { connect } from "react-redux";
import SideBar from "../components/Sidebar";

import { fetchDataAction } from "../store/productsReducer";

//selectors
import selecteCategory from "../store/Selectors/SelecteCategory";

const HomePage = ({ category, fetchDataAction }) => {
  useEffect(() => {
    fetchDataAction();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <SideBar category={category} />
        <div className="col-md-4">
          Qui culpa tenetur beatae rerum aperiam unde eos voluptatibus. Qui
          impedit ea quia deserunt delectus. Dolores fuga quo quis aliquam quae
          laborum tempore. Vitae deleniti ipsam optio adipisci et harum vero.
        </div>
        <div className="col-md-4">
          Earum natus illum. Facere reprehenderit non enim blanditiis quo aut.
          Eum occaecati rerum pariatur aut. Sequi maxime nemo dolores.
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  category: selecteCategory(state),
});
export default connect(mapStateToProps, { fetchDataAction })(HomePage);
