

const InputComponent = (props) => {
    return(
        <>
            <label>{props.label}</label>
            <input type={props.type} name={props.name} onChange={props.change} />
        </>
    )
}

export default InputComponent;