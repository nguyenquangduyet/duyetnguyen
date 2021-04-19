import React, {useState , useEffect} from 'react';
import {Row, Col, Skeleton, Image, Button} from 'antd';
import {useParams} from 'react-router-dom';
import MaterLayoutMovie from '../../component/mater-layout';
import {api} from '../../sevices/api';
import {helper} from '../../helper/commom';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';

const DetailMovie = () => {
    const {id} =useParams();
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState({});
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        const getData = async () =>{
            setLoading(true);
            const data = await api.getDataMovieById(id);
            if(!helper.isEmptyObject(data)){
                setMovie(data);
            }
            setLoading(false);
        }
        getData();
    },[id]);

    if(loading) {
        return(
            <MaterLayoutMovie>
                <Skeleton active/>
            </MaterLayoutMovie>
        )
    }
    if(!loading && helper.isEmptyObject(movie)) {
        return(
            <MaterLayoutMovie>
                <h1>NOt found movie</h1>
            </MaterLayoutMovie>
        )
    }

    return(
        <MaterLayoutMovie>
            <Row>
                <Col span={8}>
                    <Image src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
                    <h1>{movie.original_title}</h1>
                    <p>Release date: {movie.release_date}</p>
                </Col>
                <Col span={8}>
                    <h2>{movie.title}</h2>
                    <p>Content :{movie.overview}</p>
                    <p>Vote average :{movie.vote_average}</p>
                    <p>Vote count: {movie.vote_count}</p>
                    {
                        helper.checkTrailerVideo(movie.videos)
                        && (
                            <>
                                <Button type="primary"
                                    onClick={()=>setOpen(true)}>View trailer</Button>
                                <ModalVideo channel='youtube'
                                    autoplay 
                                    isOpen={isOpen} 
                                    videoId={movie.videos.results[0].key} 
                                    onClose={() =>setOpen(false)}
                                />
                            </>
                        )
                        
                    }
                    
        
                </Col>
                <Col span={8}>
                    {movie.images.backdrops.map((item,index) => (
                        <Image key={index}
                            src={`https://image.tmdb.org/t/p/w300${item.file_path}`}
                        />
                    ))}
                </Col>
            </Row>
        </MaterLayoutMovie>
    )

}
export default React.memo(DetailMovie);