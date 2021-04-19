import {useState, useEffect} from 'react';
import {apiCovid} from '../services/api';
import CoranaContext from '../context/index';
import PropTypes from 'prop-types';

const CoranaProvider = (props) => {
    const[loading, setLoading] = useState(false);
    const[virus, setDataVirus] = useState([]);


    useEffect(() => {
        const getData = async () =>{
            setLoading(true);
            const data = await apiCovid.getDataFromApi();
            if(data){
                setDataVirus(data);
            }
            setLoading(false);
        }
        getData();
    }, []);
    return(
        <CoranaContext.Provider value={{loading, virus}}>
            {props.children}
        </CoranaContext.Provider>
    )
}

CoranaProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default CoranaProvider;