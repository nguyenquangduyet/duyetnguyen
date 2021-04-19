import {Row, Col, Card, Skeleton} from 'antd';
import {helper} from '../helper/commom';

const { Meta } = Card;

const ListMovie = (props) => {
    //props : nhan tat ca cac props tu component khac truyen sang
    if(props.loading || helper.isEmptyObject(props.dataMovie)){
        return(<Skeleton active />)
    }
    return (
        <Row style={{margin:'20px 0px'}}>
            {props.dataMovie.map((item, index) => (
                <Col span={6} key={index}>
                    <Card
                        hoverable
                        style={{ width: 240, marginTop: '20px'}}
                        cover={<img alt={item.title} src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} />}
                    >
                        <Meta title={item.title} />
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default ListMovie;