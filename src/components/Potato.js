import React from 'react';
import potato from '../potato.png';

class Potato extends React.Component {
    render() {
        return (
        <div className="potato">
            <h3>{this.props.potatoes} potatoes</h3>
            <p>{this.props.potatoesPerSec}/s</p>
            <img src={potato} alt="Potato" onClick={this.props.onClick}></img>
        </div>
        );
    }
}


export default Potato;