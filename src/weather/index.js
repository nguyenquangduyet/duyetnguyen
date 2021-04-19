import React from 'react';
import {Row, Col} from 'antd';
import MainWeather from './component/main-weather';
import WeatherComponent from './component/weather';
import SynComponent from './component/syntem';
import WeatherProvider from './context/weatherProvider';
import WeatherContext from './context/weather-context';
import {helper} from './helper/comeon';

class AppWeather extends React.Component {
    render() {
        return (
            <WeatherProvider>
                <WeatherContext.Consumer>
                    {context => {
                        if(!helper.isEmptyObject(context.weather)){
                            return(
                                <Row style={{marginTop: '30px'}}>
                                    <Col span={20} offset={2}>
                                        <Row>
                                            <Col span={8}>
                                                <WeatherComponent/>
                                            </Col>
                                            <Col span={8}>
                                                <MainWeather/>
                                            </Col>
                                            <Col span={8}>
                                                <SynComponent/>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            )
                        }
                    }}
                </WeatherContext.Consumer>
                
            </WeatherProvider>
        )
    }
}
export default AppWeather;