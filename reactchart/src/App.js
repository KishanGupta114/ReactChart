import React,{ Component } from 'react';

import Charts from './components/chart'
import Lines from './components/line'
import Pies from './components/pie'
import Polars from './components/polar'
import DoughNuts from './components/doughnut'
import Radars from './components/radar';
import Scatters from './components/scatter'
import Horizontals from './components/horizontal'
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
            </div>
        )
    }
}
export default App