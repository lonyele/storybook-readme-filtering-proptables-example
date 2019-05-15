import React from "react";
import PropTypes from "prop-types";

export class MyButton extends React.Component {
  render() {
    return (
      <button>
        button!!!!!
        {this.props.content}
        {this.props.name}
      </button>
    );
  }
}

MyButton.defaultProps = {
  name: "my buttons~~"
};

MyButton.propTypes = {
  content: PropTypes.string.isRequired,
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number
};
