import React from 'react';

import './Forest.scss';

import Mushroom from '../Mushroom/Mushroom';

class Forest extends React.Component {
  render() {
    const buildMushrooms = this.props.forest.map((mushroom) => (
      <Mushroom mushroom={mushroom}/>
    ));
    return (
      <div className="Forest d-flex flex-wrap">
        {buildMushrooms}
      </div>
    );
  }
}

export default Forest;
