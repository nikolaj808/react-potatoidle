import React from 'react';

class StatsPage extends React.Component {
    render() {
        return (
        <div className="statsPage">
            <h1 className="statsHeader">Stats</h1>

            <div className="totalClicks">
                <h2>Total clicks {this.props.stats.totalClicks}</h2>
                <h2>Total potatoes {this.props.stats.totalPotatoes}</h2>
            </div>
        </div>
        );
    }
}

export default StatsPage;