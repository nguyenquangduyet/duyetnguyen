import {useState} from 'react';
import ButtonCounter from './component/button';
import ResultCounter from './component/result';
import HeaderComponent from './component/header';

const AppCounter = () => {
    const [count, setCount] = useState(0);
    // count la 1 state 
    //setCount ~~ this.setState({});
    const increment = () =>{
        setCount(count+1);
        // this.setState({count : this.state.count +1})
    }

    const decrement = () =>{
        setCount(count-1);
        // this.setState({count : this.state.count -1})
    }

    return(
        <>
            <HeaderComponent/>
            <ResultCounter result={count}/>
            <ButtonCounter type="button" click={increment}>+</ButtonCounter>
            <ButtonCounter type="button" click={decrement}>-</ButtonCounter>
        </>
    )
}

export default AppCounter;