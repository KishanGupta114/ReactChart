import React,{ Component } from 'react';

import Charts from './components/chart'
import Lines from './components/line'
import Pies from './components/pie'

class App extends Component {
    render() {
        return(
            <div className="chart">
            
            <Charts />
            <Pies />
            <Lines />
            </div>
        )
    }
}
export default App