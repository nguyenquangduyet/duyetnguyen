import React,{useState} from 'react';
import {Row, Col, DatePicker} from 'antd';
import MaterLayoutMovie from '../../component/mater-layout';
import {api} from '../../sevices/api';
import ListMovies from '../../component/list-movie';
import {helper} from '../../helper/commom';
import PaginationMovie from '../../component/phantrang';

const{RangePicker} = DatePicker;

const ComingMovie = () => {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [comingMovies, setComingMovies] = useState({});
    const [totalPage, setTotalPage] = useState(0);
    const [totalItem, setTotalItem] = useState(0);
    const [fDate, setFromDate] = useState('');
    const [tDate, setToDate] = useState('');

    const chooseTime = async (t1,t2,p) => {
        setLoading(true);
        setPage(p);
        let fromDate= t2[0];
        let toDate = t2[1];
        let data = await api.getDataComingMovies(fromDate, toDate, page);
        if(data.hasOwnProperty('results')) {
            setFromDate(fromDate);
            setToDate(toDate);
            setComingMovies(data.results);
            setTotalPage(data.total_pages);
            setTotalItem(data.total_results);
        }
        setLoading(false);
    }
    return(
    <MaterLayoutMovie>
        <Row>
            <Col span={24}>
                <RangePicker
                    onChange={(d1,d2)=> chooseTime(d1,d2)}
                />

            </Col>
        </Row>
        {!loading && !helper.isEmptyObject(comingMovies)
        &&
        <ListMovies
            loading={loading}
            movies={comingMovies}
        />
        }
        {!loading && !helper.isEmptyObject(comingMovies)
        &&
        <PaginationMovie
            current={page}
            total={totalItem}
            totalPage={totalPage}
            fDate={fDate}
            tDate={tDate}
            change={chooseTime}
           />
        }
    </MaterLayoutMovie>
    )
}
export default React.memo(ComingMovie);