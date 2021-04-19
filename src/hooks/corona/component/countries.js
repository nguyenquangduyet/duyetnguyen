import React from 'react';
import {Table} from 'antd';
import CoranaContext from '../context/index';

const columns =[
    {
        title: "Country",
        dataIndex: "Country",
        key: "Country"
    },
    {
        title: "Country code",
        dataIndex: "CountryCode",
        key: "CountryCode"
    },
    {
        title: "New Comfirmed",
        dataIndex: "NewConfirmed",
        key: "NewConfirmed"
    },
    {
        title: "Total Comfirmed",
        dataIndex: "TotalConfirmed",
        key: "TotalConfirmed"
    },
    {
        title: "New Deaths",
        dataIndex: "NewDeaths",
        key: "NewDeaths"
    },
    {
        title: "Total Deaths",
        dataIndex: "TotalDeaths",
        key: "TotalDeaths"
    },
    {
        title: " New Recovered",
        dataIndex:"NewRecovered",
        key: "NewRecovered"
    },
    {
        title: "Total Recovered",
        dataIndex:"TotalRecovered",
        key: "TotalRecovered"
    }
];

const data = []

const Countries = () => {
        return (
            <Table style={{marginTop:'20px'}} columns={columns} dataSource={data} rowkey="CountryCode" />   
        )
}

export default React.memo(Countries);
