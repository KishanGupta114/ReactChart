import React,{ Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Charts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData : {
                labels : ['hi', 'hell', 'guy', 'oyees', 'howdy'],
                datasets : [
                    {
                        label : 'hurrey !',
                        data : [
                            197594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95072
                        ],
                        backgroundColor: [
                            'rgba(78, 342, 132, 0.6)',
                            'rgba(11, 231, 235, 0.6)',
                            'rgba(115, 45, 86, 0.6)',
                            'rgba(275, 92, 92, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]
            }
        }
    }

    static defaultProps = {
      displayTitle: true,
      displayLegend: true,
      legendPosition: 'right'
    }
    render() {
        return(
            <div className="chart">
            <Bar
            data={this.state.chartData}
            
            options={{ 
                title : {
                  display : this.props.displayTitle,
                  text : 'OOO fu**',
                  fontSize : 25
                },
                legend : {
                  display : this.props.displayLegend,
                  position: this.props.legendPosition
                }
            }}
            />
            
            </div>
        )
    }
}
export default Charts