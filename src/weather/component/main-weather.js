import React from 'react';
import {Card, Skeleton, Image} from 'antd';
import WeatherContext from '../context/weather-context';

class MainWeather extends React.PureComponent {
    render() {
        return (
            <WeatherContext.Consumer>
                {context =>{
                    if(context.loading){
                        return(<Skeleton active />)
                    }
                    return(
                        <Card title="Main Weather" bordered={true}>
                            <p> Nhiet do : {context.weather.main.temp}</p>
                            <p> Nhiet do thap nhat : {context.weather.main.temp_min}</p>
                            <p> Nhiet do cao nhat : {context.weather.main.temp_max}</p>
                            <p> Do am : {context.weather.main.pressure}</p>
                            <p> Ap suat : {context.weather.main.humidity}</p>
                        </Card>
                    )
                }}
            </WeatherContext.Consumer>
            
        )
    }
}
export default MainWeather;