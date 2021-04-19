import React from 'react';
import {Row, Col} from 'antd';
import MaterLayoutMovie from '../../component/mater-layout';

const PupularMovie = () => {
    return(
        <MaterLayoutMovie>
            <Row>
                <Col span={24}>
                    <h1>this is popular page</h1>
                </Col>
            </Row>
        </MaterLayoutMovie>
    )
}
export default React.memo(PupularMovie);