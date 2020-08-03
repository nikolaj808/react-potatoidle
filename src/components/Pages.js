import React from 'react';

class Pages extends React.Component {
    render() {
        return (
        <div className="pages">
            <h2 className="upgrades" onClick={this.props.onClick}>Upgrades</h2>
            <h2 className="stats" onClick={this.props.onClick}>Stats</h2>
        </div>
        );
    }
}

export default Pages;