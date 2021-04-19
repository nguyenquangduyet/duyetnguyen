import React from 'react';
import {Row, Col, Pagination } from 'antd';
 
const PaginationMovie = (props) => {
    let arrTime = [props.fDate, props.tDate]
    return(
        <Row style={{margin:'30px 0px'}}>
            <Col span={24} style={{textAlign: 'center'}}>
                <Pagination
                    current={props.current}
                    total={props.total}
                    pageSize={20}
                    showSizeChanger={false}
                    onChange={(p) => props.change(null, arrTime,p)}
                />
            </Col>
        </Row>
    )
}
 export default  React.memo(PaginationMovie);