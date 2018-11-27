import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sushiData: [],
      eatenSushi: [],
      firstSushi: 1,
      lastSushi: 4,
      wallet: 100,
      addMoneyClicked: false
    }
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(sushis => this.setState({ sushiData: sushis }))
  }

  containerClickHandler = (clickedSushi, price) => {
    if(this.state.wallet >= price) {
      this.setState({ eatenSushi: [...this.state.eatenSushi, clickedSushi] })
    }
    else(
      alert("Not enough money")
    )
  }

  moreButtonHandler = () => {
    if(this.state.firstSushi === 97) {
      this.setState({
        firstSushi: 1,
        lastSushi: 4
      })
    }
    else {
      this.setState({
        firstSushi: this.state.firstSushi + 4,
        lastSushi: this.state.lastSushi + 4
      })
    }
  }

  backButtonHandler = () => {
    if(this.state.firstSushi === 1) {
      this.setState({
        firstSushi: 97,
        lastSushi: 100
      })
    }
    else {
      this.setState({
        firstSushi: this.state.firstSushi - 4,
        lastSushi: this.state.lastSushi - 4
      })
    }
  }

  walletSubtractor = (price) => {
    if(this.state.wallet >= price) {
      this.setState({ wallet: this.state.wallet - price })
    }
  }

  addMoneyButtonHandler = () => {
    if(this.state.addMoneyClicked === false) {
      this.setState({ addMoneyClicked: true })
    }
    else{
      this.setState({ addMoneyClicked: false })
    }
  }

  formHandler = (money) => {
    this.setState({ wallet: this.state.wallet + parseInt(money) })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushiData={this.state.sushiData} containerClickHandler={this.containerClickHandler} eatenSushi={this.state.eatenSushi} firstSushi={this.state.firstSushi} lastSushi={this.state.lastSushi} moreButtonHandler={this.moreButtonHandler} backButtonHandler={this.backButtonHandler} walletSubtractor={this.walletSubtractor}/>
        <Table wallet={this.state.wallet} eatenSushi={this.state.eatenSushi} addMoneyButtonHandler={this.addMoneyButtonHandler} addMoneyClicked={this.state.addMoneyClicked} formHandler={this.formHandler} />
      </div>
    );
  }
}

export default App;
