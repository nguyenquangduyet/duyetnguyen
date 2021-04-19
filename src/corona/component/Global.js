import React from 'react';
import { Card, Row, Col, Skeleton} from 'antd';
import CoronaContext from '../context/MyContext';

class GlobalCorona extends React.PureComponent {
    render() {
        return (
            <CoronaContext.Consumer>
                {context => {
                    if(context.loading || context.virus.length === 0){
                        return (<Skeleton avtive />)
                    }
                    return(
                        <Row style={{ marginTop:'20px'}}>
                            <Col span={8}>
                                <Card title="Confirmed" bordered={false} style={{ width: 300 }}>
                                    <p>NewConfirmed: {context.virus.Global.NewConfirmed}</p>
                                    <p>TotalConfirmed: {context.virus.Global.TotalConfirmed}</p>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Deaths" bordered={false} >
                                    <p>NewDeaths:  {context.virus.Global.NewDeaths}</p>
                                    <p>TotalDeaths:  {context.virus.Global.TotalDeaths}</p>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Recovered" bordered={false} style={{ width: 300 }}>
                                    <p>NewRecovered: {context.virus.Global.NewRecovered}</p>
                                    <p>TotalRecovered: {context.virus.Global.TotalRecovered}</p>
                                </Card>
                            </Col>
                        </Row>
                    )
                }
                }
                
            </CoronaContext.Consumer>
        )
    }
}

//GlobalCorona.propTypes = {
 //   loading :PropTypes.bool,
    //virus: PropTypes.object.isRequired
//}
export default GlobalCorona;