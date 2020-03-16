import React,{ Component } from 'react';

import Charts from './components/chart'
import Lines from './components/line'
import Pies from './components/pie'
import Polars from './components/polar'
import DoughNuts from './components/doughnut'
import Radars from './components/radar';
import Scatters from './components/scatter'
import Horizontals from './components/horizontal'
import Doughnutss from './components/dynamicDoughnut'
import DynamicBars from './components/dynamicBar'
import DynamicLines from './components/dynamicLine'


class App extends Component {
    render() {
        return(
            <div className="chart">
            
            <Charts />
            <Pies />
            <Lines />
            <Polars />
            <DoughNuts />
            <Radars />
            <Scatters />
            <Horizontals />
            <Doughnutss />
            <DynamicBars />
            <DynamicLines />
            </div>
        )
    }
}
export default App