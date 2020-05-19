import React from 'react';
import './Basket.scss';
import Mushroom from '../Mushroom/Mushroom';

class Basket extends React.Component {
  pickShroomEvent = (e) => {
    e.preventDefault();
    const { pickAShroom } = this.props;
    const randId = `shroom${Math.ceil(Math.random() * 20)}`;
    pickAShroom(randId);
  }

  render() {
    const { basket, pickAShroom } = this.props;
    const buildBasket = basket.map((mushroom) => (
      <Mushroom key={mushroom.id} mushroom={mushroom} pickAShroom={pickAShroom} />
    ));

    return (
      <div className="Basket">
        <h2 className="row col-12 title">Basket</h2>
        <button className="btn btn-info" onClick={this.pickShroomEvent}>Pick a Shroom!</button>
        <div className="container d-flex flex-wrap">
          { buildBasket }
        </div>
      </div>
    );
  }
}

export default Basket;
