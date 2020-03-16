import React, { Component } from 'react';
import {HorizontalBar} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'OOO Fu** Growth',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,123,199,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,23,178,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};


class Horizontals extends Component {
  render() {
    return (
      <div>
        
        <HorizontalBar data={data} />
      </div>
    );
  }
}
export default Horizontals