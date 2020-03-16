import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
  labels: [
    'Red',
    'Green',
    'Yellow',
    'Pink'
  ],
  datasets: [{
    label: 'OOO Fu** Growth',
    data: [
        getRandomInt(100, 50, 70, 85), 
        getRandomInt(70, 100, 50, 45), 
        getRandomInt(50, 160, 110, 10), 
        getRandomInt(50, 100, 140, 110)
    ],
    backgroundColor: [
    '#2CCFFF',
    '#36A2EB',
    '#FFCE56',
    '#8EB256'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#8EB256'
    ]
  }]
});

class DynamicLines extends Component {

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
        <Line data={this.state} />
      </div>
    );
  }
}
export default DynamicLines