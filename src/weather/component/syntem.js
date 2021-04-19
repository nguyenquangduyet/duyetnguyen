import React from 'react';
import {Card, Skeleton, Image} from 'antd';
import WeatherContext from '../context/weather-context';

class SystemComponent extends React.PureComponent {
    render() {
        return (
            <WeatherContext.Consumer>
                {context =>{
                    if(context.loading){
                        return(<Skeleton active />)
                    }
                    return(
                        <Card title="Weather" bordered={true}>
                            <p> Country : {context.weather.sys.type}</p>
                            <p> Tam nhin xa : {context.weather.sys.id}</p>
                            <p> Suc gio : {context.weather.sys.sunrise}</p>
                            <p> Dat nuoc : {context.weather.sys.country}</p>
                            <p> Hoang hon :{context.weather.sys.sunset}</p>
                        </Card>
                    )
                }}
            </WeatherContext.Consumer>
            
        )
    }
}
export default SystemComponent;