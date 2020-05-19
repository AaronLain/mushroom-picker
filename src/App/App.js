import React from 'react';
import './App.scss';
import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';
import Basket from '../components/Basket/Basket';

class App extends React.Component {
  state = {
    forest: [],
    basket: [],
  }

  componentDidMount() {
    const forest = mushroomData.getMushrooms();
    const basket = mushroomData.getBasket();
    this.setState({ forest, basket });
  }

  pickAShroom = (shroomId) => {
    mushroomData.pickShroom(shroomId);
    const shrooms = mushroomData.getMushrooms();
    const basket = mushroomData.getBasket();
    console.error(shroomId, 'shroomId');
    this.setState({ shrooms, basket });
  }

  render() {
    return (
      <div className="App">
        <h2>Mushroom Picker!</h2>
        <Basket basket={this.state.basket} pickAShroom={this.pickAShroom} />
        <Forest forest={this.state.forest} />
      </div>
    );
  }
}

export default App;
