import {Row, Col, Input} from 'antd';
import React from 'react';

const {Search} = Input;

const SearchMovie = (props) => {
    return(
        <>
            <Row style={{margin:'30px 0px'}}>
                <Col span={12} offset={6}>
                    <Search placeholder="Movie name..." enterButton="Search" size="large" loading={props.loading} onSearch={val => props.search(val)}/>
                </Col>
            </Row>
        </>
    )

}

export default React.memo(SearchMovie);