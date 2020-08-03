import React from 'react';

class UpgradesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickerUpgrade: 0,
            potatoFarmer: 0,
            potatoFactory: 0,
            potatoCloner: 0
        }
    }

    render() {
        return (
        <div className="upgradesPage">
            <h1 className="upgradesHeader">Upgrades</h1>

            <div className="upgrade-">
                <h3>Clicker Upgrade</h3>
                <h3>Cost: 10</h3>
                <h3>+ 1/s</h3>
                <h3>{this.state.clickerUpgrade}</h3>
                <button className="clickerBuy" onClick={this.props.onClick}>Buy</button>
            </div>

            <div className="upgrade">
                <h3>Potato Farmer</h3>
                <h3>Cost: 100</h3>
                <h3>+ 5/s</h3>
                <h3>{this.state.potatoFarmer}</h3>
                <button className="farmerBuy" onClick={this.props.onClick}>Buy</button>
            </div>

            <div className="upgrade">
                <h3>Potato Factory</h3>
                <h3>Cost: 2000</h3>
                <h3>+ 20/s</h3>
                <h3>{this.state.potatoFactory}</h3>
                <button className="factoryBuy" onClick={this.props.onClick}>Buy</button>
            </div>

            <div className="upgrade">
                <h3>Potato Cloner</h3>
                <h3>Cost: 40000</h3>
                <h3>+ 100/s</h3>
                <h3>{this.state.potatoCloner}</h3>
                <button className="clonerBuy" onClick={this.onClick}>Buy</button>
            </div>
        </div>
        );
    }
}

export default UpgradesPage;