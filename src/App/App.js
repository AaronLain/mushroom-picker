import React from 'react';
import './App.scss';
import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';

class App extends React.Component {
  state = {
    forest: [],
  }

  componentDidMount() {
    const forest = mushroomData.getMushrooms();
    this.setState({ forest });
  }

  render() {
    return (
      <div className="App">
        <h2>HELLO THERE</h2>
        <button className="btn btn-info">LOL</button>
        <Forest forest={ this.state.forest }/>
      </div>
    );
  }
}

export default App;
