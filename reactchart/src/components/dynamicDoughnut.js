import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    label: 'OOO Fu** Growth',
    data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
    backgroundColor: [
    '#CCC',
    '#36A2EB',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
});

class Doughnutss extends Component {

	getInitialState() {
		return getState();
    }	

	componentWillMount() {
		setInterval(() => {
			this.setState(getState());
		}, 5000);
	}

  render() {
    return (
      <div>
        <Doughnut data={this.state} />
      </div>
    );
  }
}
export default Doughnutss