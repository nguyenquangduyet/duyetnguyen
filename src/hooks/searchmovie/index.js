import SearchMovie from './component/search';
import ListMovie from './component/list-movie';
import { apiMovie } from './services/api';
import { helper } from './helper/commom';
import {useState} from 'react';
import PaginationMovie from './component/phantrang';

const AppMovie = () => {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [dataMovie, setDataMovie] = useState({});
    const [keyword, setKeyword] = useState("")
    const [totalItems, setTotalItems] = useState(0)

    const searchFilm = async (movieName='', p=1) => {
        setLoading(true);
        setKeyword(movieName);
        setPage(p);
        const data = await apiMovie.searchMovieByKeyword(movieName,p);
        if(!helper.isEmptyObject(data)){
            if(data.hasOwnProperty('results')){
                setDataMovie(data.results);
                setTotalItems(data.total_results)
            }
        }
        setLoading(false);
    }
    return(
        <>
            <SearchMovie
                loading={loading}
                search={searchFilm}
            />
            {!loading && !helper.isEmptyObject(dataMovie) &&
            <ListMovie dataMovie={dataMovie} 
            />}
            {!loading && !helper.isEmptyObject(dataMovie) &&
            <PaginationMovie
                search={searchFilm}
                name={keyword}
                current={page}
                pageSize={20}
                total={totalItems}
            />
            }
        </>
    )
}
export default AppMovie;