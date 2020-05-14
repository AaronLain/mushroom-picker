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
    console.error(basket, 'basket');
    this.setState({ forest, basket });
  }

  render() {
    return (
      <div className="App">
        <h2>Mushroom Picker!</h2>
        <Forest forest={this.state.forest} />
        <Basket basket={this.state.basket} />
      </div>
    );
  }
}

export default App;
