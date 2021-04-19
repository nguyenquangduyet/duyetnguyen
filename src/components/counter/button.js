import React from 'react';
import PropTypes from 'prop-types';

class ButtonCounter extends React.Component {

  render() {
    return (
      <>
        <button
          type={this.props.type}
          onClick={() => this.props.click()}
        >{this.props.children}</button>
        <p>{this.props.test}</p>
      </>
    )
  }
}

ButtonCounter.propTypes = {
  type: PropTypes.string,
  click: PropTypes.func.isRequired,
  test: PropTypes.string.isRequired
}
ButtonCounter.defaultProps = {
  test: "counter app"
}
export default ButtonCounter;