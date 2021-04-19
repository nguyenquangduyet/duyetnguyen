import React from 'react';
import styled  from 'styled-components';
import PropTypes from 'prop-types';

// tao component Input bang styled-components
const InputComponent = styled.input`
  width: 300px;
  height: 24px;
  border: 1px solid pink;
  border-radius: 3px;
`;
class InputTodo extends React.Component {
  render() {
    return(
      <>
        <InputComponent
          value={this.props.val}
          onChange={this.props.change}
        />
      </>
    )
  }
}
InputTodo.propTypes = {
  change: PropTypes.func.isRequired
}
export default InputTodo;