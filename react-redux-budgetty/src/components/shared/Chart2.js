import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';


class Chart2 extends Component {
  render() {
    let { purchases } = this.props;
    purchases = purchases || [];
    const labels = purchases
      .map(purchase => purchase.category)
      .filter((purchase, i, arr) => i === arr.indexOf(purchase))
      .sort()
    const amtSpentByCategory = labels.map((label) => {
      return purchases
        .filter(p => p.category === label)
        .reduce((total, p) => total + p.price, 0)
    })
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h6>Spending Breakdown</h6>
        <Pie data={{
          labels,
          datasets: [{
            data: amtSpentByCategory,
            backgroundColor: [
              '#8A3660',
              '#69D694',
              '#F07362',
              '#289DA8',
            ],
            hoverBackgroundColor: [
              '#8A3660',
              '#69D694',
              '#F07362',
              '#289DA8',
            ]
          }]
        }} />
      </div>
    )
  }
}

export default Chart2;