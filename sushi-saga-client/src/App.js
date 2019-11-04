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
    noBudget: false
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({
      sushis: data
    }))
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

  eatSushi = (id, price) => {
    if (this.state.eatenSushis.includes(id) )return ;
    if (this.state.budget >= price) {
      this.setState({
        eatenSushis: [...this.state.eatenSushis, id],
        budget: this.state.budget - price,
        noBudget: false
      })
    }else {
      this.setState({
        noBudget: true
      })
    }
   
  }

  render() {

    const  {sushis, startIndex, eatenSushis, budget, noBudget} = this.state

    const fourSushis = sushis.slice(startIndex, startIndex + 4)

    const finalSushis = fourSushis.map(sushi => ({...sushi, eaten: eatenSushis.includes(sushi.id)}))
    console.log(startIndex)
    return (
      <div className="app">
        <SushiContainer sushis={finalSushis} nextFour={this.nextFour} eatSushi={this.eatSushi}/>
        <Table noBudget={noBudget} budget={budget} eatenSushis={eatenSushis}/>
      </div>
    );
  }
}

export default App;