import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    sliceIndex: 0,
    budget: 100,
    eatenSushi: []
  }

  nextFour = () => {
    this.setState({
      sliceIndex: this.state.sliceIndex + 4
    })
  }

  eatSushi = (id) => {

    const sushiPrice = this.state.sushis.find(sushi => sushi.id === id).price 
    const newBudget = this.state.budget - sushiPrice

    if (this.state.budget >= sushiPrice && !this.state.eatenSushi.includes(id)) {
      this.setState({
        budget: newBudget,
        eatenSushi: [...this.state.eatenSushi, id]
      })
    }
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushis => this.setState({
      sushis: sushis
    }))

  }

  render() {
    
    const fourSushis = this.state.sushis.slice(this.state.sliceIndex, this.state.sliceIndex + 4)
    console.log(fourSushis)
    // debugger
    return (
      <div className="app">
        <SushiContainer eatSushi={this.eatSushi} sushis={fourSushis} nextFour={this.nextFour} eatenSushi={this.state.eatenSushi}/>
        <Table eatenSushi={this.state.eatenSushi} budget={this.state.budget}/>
      </div>
    );
  }
}

export default App;