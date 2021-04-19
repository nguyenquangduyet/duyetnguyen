import PropTypes from 'prop-types';


const ResultCounter = (props) => {
    return(
        <h1>{props.result}</h1>
    )
}

ResultCounter.propTypes ={
    result: PropTypes.number
}

export default ResultCounter;