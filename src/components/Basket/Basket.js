import React from 'react';
import './Basket.scss';
import Mushroom from '../Mushroom/Mushroom';

class Basket extends React.Component {
  render() {
    const buildBasket = this.props.basket.map((mushroom) => (
      <Mushroom key={mushroom.id} mushroom={mushroom.inBasket} />
    ));

    return (
      <div className="Basket d-flex flex-wrap">
        <h2 className="row col-12 title">Basket</h2>
        { buildBasket }
      </div>
    );
  }
}

export default Basket;
