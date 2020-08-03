import React from 'react';
import './App.css';

import Potato from './components/Potato';
import Header from './components/Header';
import Pages from './components/Pages';
import UpgradesPage from './components/UpgradesPage';
import StatsPage from './components/StatsPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 'upgrades',
      clickerUpgrade: 1,
      potatoFarmer: 0,
      potatoFactory: 0,
      potatoCloner: 0,
      potatoes: 100,
      potatoesPerSec: 0,
      stats: {
        totalClicks: 0,
        totalPotatoes: 0
      }
    }
  }

  clickPotato = () => {
    this.setState({potatoes: this.state.potatoes += 1 * this.state.clickerUpgrade});
    this.setState({totalClicks: this.state.stats.totalClicks += 1});
    this.setState({totalPotatoes: this.state.stats.totalPotatoes += 1 * this.state.clickerUpgrade});
  }

  clickPages = (e) => {
    this.setState({currentPage: [e.target.className]})
    console.log(e.target.className);
  }

  clickBuy = (e) => {
  if (e.target.className === 'clickerBuy') {
    if (this.state.potatoes >= 10) {
      this.setState({potatoes: this.state.potatoes -= 10});
      this.setState({clickerUpgrade: this.state.clickerUpgrade + 1});
    }
  }
  else if (e.target.className === 'farmerBuy') {
    if (this.state.potatoes >= 100) {
      this.setState({potatoes: this.state.potatoes -= 100});
      this.setState({potatoFarmer: this.state.potatoFarmer + 1});
      this.setState({potatoesPerSec: this.state.potatoesPerSec += 5});
    }
  }
  else if (e.target.className === 'factoryBuy') {
    if (this.state.potatoes >= 2000) {
      this.setState({potatoes: this.state.potatoes -= 2000});
      this.setState({potatoFactory: this.state.potatoFactory + 1});
      this.setState({potatoesPerSec: this.state.potatoesPerSec += 20});
    }
  }
  else if (e.target.className === 'clonerBuy') {
    if (this.state.potatoes >= 40000) {
      this.setState({potatoes: this.state.potatoes -= 40000});
      this.setState({potatoCloner: this.state.potatoCloner + 1});
      this.setState({potatoesPerSec: this.state.potatoesPerSec += 100});
    }
  }
  }

  showPage = () => {
    if (this.state.currentPage == 'upgrades') {
      return <UpgradesPage onClick={this.clickBuy}/>
    }
    else {
      return <StatsPage stats={this.state.stats}/>
    }
  }

  startAutoClick() {
    setInterval(() => {
      this.setState({potatoes: this.state.potatoes += (this.state.potatoesPerSec)});
      this.setState({totalPotatoes: this.state.stats.totalPotatoes += (this.state.potatoesPerSec)})
    }, 1000);
    
  }

  componentDidMount() {
    this.startAutoClick();
  }

  render() {
    return (
      <div className="App">
        <div className="grid-container">
          <Header />
          <Potato onClick={this.clickPotato} potatoes={this.state.potatoes} potatoesPerSec={this.state.potatoesPerSec}/>
          <Pages onClick={this.clickPages}/>
          {this.showPage()}
        </div>
      </div>
    );
  }
}

export default App;
