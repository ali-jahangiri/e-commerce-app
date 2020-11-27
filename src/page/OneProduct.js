import React from "react";
import { connect } from "react-redux";
import Navigation from "../components/Navigation";
import OneProductControler from "../components/OneProductControler";
import ShopBaket from "../components/ShopBaket";

import selecteOneProduct from "../store/Selectors/selecteSingleProduct";

const OneProduct = ({
  item,
  history,
  match: {
    params: { category },
  },
}) => {
  const { name, imageUrl } = item;
  return (
    <div className="container">
      <div className="oneproduct">
        <div className="row">
          <div className="col-md-12 oneproduct__header">
            <Navigation category={category} />
            <ShopBaket />
          </div>
          <div className="col-md-6 col-xl-4 offset-xl-2">
            <img src={imageUrl} alt={name} />
          </div>
          <div className="col-md-6 col-xl-4 oneproduct__details">
            <p className="oneproduct__title">{name}</p>
            <p>
              Autem dolores quia perspiciatis veniam voluptas. Ut officia
              distinctio iusto est blanditiis expedita. In est sunt qui. Qui
              iusto labore iusto aut tempora est eum. Soluta molestias optio non
              dolorem. Est nesciunt et necessitatibus ea sed possimus
              voluptatibus. Eum eos eos tempore corrupti occaecati consequuntur
              culpa. Iure atque eum aut culpa voluptatem qui aut magni non.
              Exercitationem aliquam hic labore minus ipsam sed tenetur ut eos.
              Quas praesenti
            </p>
            <OneProductControler item={item} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (
  state,
  {
    match: {
      params: { category, id },
    },
  }
) => ({
  item: selecteOneProduct(state, category, id),
});

export default connect(mapStateToProps)(OneProduct);
