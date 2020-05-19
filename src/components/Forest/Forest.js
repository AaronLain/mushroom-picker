import React from 'react';
import PropTypes from 'prop-types';
import './Forest.scss';
import shroomShape from '../../helpers/prop/shroomShape';

import Mushroom from '../Mushroom/Mushroom';

class Forest extends React.Component {
  static propTypes = {
    forest: PropTypes.arrayOf(shroomShape.shroomShape),
  }

  render() {
    const { forest } = this.props;
    const buildMushrooms = forest.map((mushroom) => (
      <Mushroom key={mushroom.id} mushroom={mushroom} />
    ));
    return (
      <div className="Forest d-flex flex-wrap">
        {buildMushrooms}
      </div>
    );
  }
}

export default Forest;
