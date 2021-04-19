import {Row, Col, Pagination} from 'antd';

const PaginationMovie = (props) => {
    return(
    <Row style={{ margin: '30px 0px'}}>
        <Col span={24} style={{textAlign: 'center'}}>
            <Pagination current={props.currentPage} total={props.totalItems} pageSize={props.pageSize}
            showSizechanger={false} onChange={(p) => props.changePage(p)} />
        </Col>
    </Row>
    )
}

export default PaginationMovie;