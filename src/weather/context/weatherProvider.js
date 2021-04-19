import React from 'react';
import {Row, Col} from 'antd';
import WeatherContext from './weather-context';
import {apiWeather} from '../services/weather-api';
import { Input } from 'antd';
import {helper} from '../helper/comeon';

const {Search} = Input;

class WeatherProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            weather: {},
        }
    }

    //
    seteStateSync =(state) => {
        return new Promise(resolve => this.setState(state, resolve));
    }

    getDataFromApi = async (city) => {
        //cap nhap state loading ve true
        await this.seteStateSync({loading:true});
        const data = await apiWeather.searchWeatherCity(city);
        if (!helper.isEmptyObject(data)) {
            if(data.cod === 200){
               await this.seteStateSync({weather : data});
            }
        }
        await this.seteStateSync({loading:false});
    }

    render() {
        return (
            <>
                <Row style={{marginTop: '20px'}}>
                    <Col span={18} offset={3}>
                    <Search placeholder="name of city ..." enterButton="Search" size="large" 
                    loading={this.state.loading} onSearch={city =>this.getDataFromApi(city)} />
                    </Col>
                </Row>
                <WeatherContext.Provider value={this.state}>
                    {this.props.children}
                </WeatherContext.Provider>
            </>
        )
    }
}
export default WeatherProvider;