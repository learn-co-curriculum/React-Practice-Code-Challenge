import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    startIndex: 0,
    eatenSushis: [],
    budget: 100,
    noBudget: false,
  }



  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({sushis}))
  }

  nextFour = () => {
    if (this.state.startIndex + 4 >= this.state.sushis.length) {
    this.setState({
      startIndex: this.state.startIndex + 4 - this.state.sushis.length
    })
  } else {
    this.setState({
      startIndex: this.state.startIndex + 4
    })
  }
  }

  beenEaten = (id, price) => {
    if (this.state.eatenSushis.includes(id)) return;
    if (this.state.budget < price) {
      this.setState({
        noBudget: true
      })
    } else {
      this.setState({
        eatenSushis: [...this.state.eatenSushis, id],
        budget: this.state.budget - price,
        noBudget: false
      })
    }
  
  }




  render() {
    const {startIndex, eatenSushis, budget, noBudget} = this.state

    const finalSushis = this.state.sushis.map(sushi => ({...sushi, eaten: this.state.eatenSushis.includes(sushi.id)}))
    const fourSushis = finalSushis.slice(startIndex, startIndex + 4)

    console.log(startIndex)

    return (
      <div className="app">
        <SushiContainer  beenEaten={this.beenEaten} nextFour={this.nextFour} sushis={fourSushis}/>
        <Table noBudgetMsg={noBudget} eatenSushis={eatenSushis} budget={budget}/>
      </div>
    );
  }
}

export default App;