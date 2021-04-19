import PropTypes from 'prop-types';


//function component
const ButtonCounter = (props) => {
    //props : nhan tat ca cac props tu ben ngoai truyen vao
    return(
        <button type={props.type} onClick={() => props.click()}>{props.children}</button>
    )

}
ButtonCounter.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node,
    click: PropTypes.func.isRequired
}

export default ButtonCounter;