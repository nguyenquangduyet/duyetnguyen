import {Row, Col, Pagination} from 'antd';
import React from 'react';

const PaginationMovie = (props) => {
    return(
    <Row style={{ margin: '30px 0px'}}>
        <Col span={24} style={{textAlign: 'center'}}>
            <Pagination current={1} total={500} pageSize={20}
            showSizechanger={false} onChange={(p) => props.changePage(p)} />
        </Col>
    </Row>
    )
}

export default React.memo(PaginationMovie);