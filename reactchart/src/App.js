import React,{ Component } from 'react';

import Charts from './components/chart'
import Lines from './components/line'
import Pies from './components/pie'
import Polars from './components/polar'
import DoughNuts from './components/doughnut'

class App extends Component {
    render() {
        return(
            <div className="chart">
            
            <Charts />
            <Pies />
            <Lines />
            <Polars />
            <DoughNuts />
            </div>
        )
    }
}
export default App