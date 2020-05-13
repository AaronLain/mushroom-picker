import React from 'react';
// import PropTypes from 'prop-types';
import shroomShape from '../../helpers/prop/shroomShape';

import './Mushroom.scss';

class Mushroom extends React.Component {
  static propTypes = {
    mushroom: shroomShape.shroomShape,
  }

  render() {
    const { mushroom } = this.props;

    return (
      <div className="Mushroom col-3">
        <div className="card">
          <img className="card-img-top" src={mushroom.imgUrl} alt="Card of Goat" />
          <div className="card-body">
            <h5 className="card-title">{mushroom.name}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Mushroom;
