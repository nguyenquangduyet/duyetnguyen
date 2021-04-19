import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col, Skeleton} from 'antd';

class GlobalCorona extends React.PureComponent {
    render() {
        if(this.props.loading || this.props.virus.length === 0){
            return(<Skeleton active />)
        }
        return (
            <>
                <Row style={{ marginTop:'20px'}}>
                    <Col span={8}>
                        <Card title="Confirmed" bordered={false} style={{ width: 300 }}>
                            <p>NewConfirmed: {this.props.virus.Global.NewConfirmed}</p>
                            <p>TotalConfirmed:  {this.props.virus.Global.TotalConfirmed}</p>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Deaths" bordered={false} >
                            <p>NewDeaths:  {this.props.virus.Global.NewDeaths}</p>
                            <p>TotalDeaths:  {this.props.virus.Global.TotalDeaths}</p>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Recovered" bordered={false} style={{ width: 300 }}>
                            <p>NewRecovered: {this.props.virus.Global.NewRecovered}</p>
                            <p>TotalRecovered: {this.props.virus.Global.TotalRecovered}</p>
                        </Card>
                    </Col>
                </Row>
            </>
        )
    }
}

GlobalCorona.propTypes = {
    loading :PropTypes.bool,
    //virus: PropTypes.object.isRequired
}
export default GlobalCorona;