

const ButtonComponent = (props) => {
    return(
        <>
            <buton type={props.type} onClick={() =>props.click()}>{props.children}</buton>
        </>
    )
}

export default ButtonComponent;