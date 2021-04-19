import {useState} from 'react';
import {Row, Col, Card} from 'antd';
import React from 'react';
import {apiMovie} from '../services/api';
import {helper} from '../helper/commom';

const ListMovie = (props)=> {
    return(
        <>
            <Row style={{margin: '20px 0px'}}>
                <Col span={20} offset={2}>
                    <Row>
                        {props.dataMovie.map((item, index) => (
                            <Col span={6} key={index}>
                            <Card
                                hoverable
                                style={{ width: 240, marginTop:'20px' }}
                                cover={<img alt={item.title} src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} />}
                            >
                            </Card>
                        </Col>
                        ))}
                        
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default React.memo(ListMovie);