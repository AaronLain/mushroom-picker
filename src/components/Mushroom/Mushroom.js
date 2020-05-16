/* eslint-disable no-nested-ternary */
import React from 'react';
// import PropTypes from 'prop-types';
// import shroomShape from '../../helpers/prop/shroomShape';

import './Mushroom.scss';

class Mushroom extends React.Component {
  pickShroomEvent = (e) => {
    const { mushroom, pickAShroom } = this.props;
    e.preventDefault();
    pickAShroom(mushroom.id);
    console.error(mushroom.isPoisonous, 'isPoisonous');
  }

  render() {
    const { mushroom } = this.props;

    return (
      <div className="Mushroom col-3">
        <div className={mushroom.BG || 'card'}>
          <img className="card-img-top" src={mushroom.imgUrl} alt="Mushroom Card" />
          <h5 className="card-title">{mushroom.name}</h5>
          <div className="card-body">
            <p className="text">{mushroom.text}</p>
            <p className="count">{mushroom.count}</p>
            {
              mushroom.inBasket ? (
                <button className='btn btn-dark' disabled>Picked!</button>
              ) : (
                  <button className='btn btn-info' onClick={this.pickShroomEvent}>Pick!</button>
              )
            }
            </div>
          </div>
        </div>
    );
  }
}

export default Mushroom;
