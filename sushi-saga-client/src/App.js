import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super();
    this.state ={
      sushis: [],
      step: 0,
      money: 100,
      eaten: []
    }
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(sushiData => {
      this.setState({
        sushis: sushiData
      })
    })
  }

  generateFourSushi = () => {
    let filteredSushis = this.state.sushis.slice(this.state.step, this.state.step + 4)
      return filteredSushis
  }

  moreSushi = (event) => {
    this.setState({
     step: this.state.step + 4
     })
  }

  eatSushi = (prop) => {
     let eatenArr = this.state.eaten
      eatenArr.push(prop)
     let cost = this.state.money - prop.price
      this.setState({
        eaten: eatenArr,
        money: cost
      })
  }


  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.generateFourSushi()} moreSushi={this.moreSushi} eatSushi={this.eatSushi} money={this.state.money} eaten={this.state.eaten}/>
        <Table money={this.state.money} eaten={this.state.eaten}/>
        
      </div>
    );
  }
}

export default App;