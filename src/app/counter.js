import React from 'react';
import ButtonCounter from '../components/counter/button';
import Result from '../components/counter/result';
import './counter.css';
import  HeaderComponent from '../components/counter/header';

class CounterApp extends React.Component {

  constructor(props){
    super(props);
    // khai state
    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    // cap nhat tang gia tri state count
    // this.state.count = 1; // error

    this.setState({
      ...this.state,
      count: this.state.count + 1
    })
    
   /*
    this.setState((state, props) => {
      return {
        count: state.count + 1
      }
    })
    */
  }

  viewIncrementCount = () => {
    this.incrementCount();
    this.incrementCount();
  }

  decrementCount = () => {
    // cap nhat giam gia tri state count
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return(
      <>
        <div className="container">
          <HeaderComponent />
          <Result count={this.state.count} />
          <ButtonCounter
            type="button"
            click={this.viewIncrementCount}
          > + </ButtonCounter>
          <ButtonCounter
            type="button"
            click={this.decrementCount}
          > - </ButtonCounter>
        </div>
      </>
    )
  }
}
export default CounterApp;