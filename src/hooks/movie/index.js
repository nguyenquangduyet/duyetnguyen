import {useEffect, useState} from 'react';
import ListMovie from './component/listmovie';
import {Row, Col} from 'antd';
import {apiMovie} from './services/api';
import {helper} from './helper/commom';
import PaginationMovie from './component/phantrang';
import SwitchLanguage from './component/switch-language';
import UserProfileProvider from './context/user-provider';

const AppMovie = () =>{
    //tao state
    const [loading, setLoading] = useState(false);
    const [language, setLanguage] = useState('en-US');
    const [page, setPage] = useState(1);
    const [dataMovie, setDataMovie] = useState({});
    const [totalItems, setTotalItems] = useState(0);
    const [totalPage, setTotalPage] = useState(0);

    //tuong duong nhu componentDidMount trong class component
    useEffect(() => {
        const getData = async () => {
            setLoading(true);//cap nhap state loaing ve true
            //call api
            const data = await apiMovie.getDataMovie(language,page);
            if(!helper.isEmptyObject(data)){
                if(data.hasOwnProperty('results')){
                    setDataMovie(data.results);
                    setTotalItems(data.total_results);
                    setTotalPage(data.total_pages);
                }
            }
            setLoading(false);
        }
        getData();
    },[page,language]);

    //viet ham phan trang va cap nhap lai state page
    const changePage = (p) => {
        if(p>0 && p<= totalPage){
            setPage(p);
        }
    }

    //ham chuyen doi ngon ngu
    const changeLanguage = (lang) =>{
        if(lang !== ''){
            setLanguage(lang)
        }
    }
    return(
        <UserProfileProvider>
        <Row>
            <Col span={20} offset={2}>
                <SwitchLanguage
                    change={changeLanguage}
                />
                <ListMovie 
                    dataMovie={dataMovie}
                    loading={loading}
                />
                {!loading && !helper.isEmptyObject(dataMovie) ?
                <PaginationMovie
                    currentPage={page}
                    totalItems={totalItems}
                    pageSize={20}
                    changePage={changePage}
                /> : null}
            </Col>
        </Row>
        </UserProfileProvider>
    )
}
export default AppMovie;