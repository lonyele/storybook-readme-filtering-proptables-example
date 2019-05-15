import React from "react";
import PropTypes from "prop-types";

export class AnotherButton extends React.Component {
  render() {
    return (
      <button>
        hm......
        {this.props.content}
        {this.props.name}
      </button>
    );
  }
}

AnotherButton.defaultProps = {
  name: "Another button~"
};

AnotherButton.propTypes = {
  content: PropTypes.string.isRequired,
  optionalArray: PropTypes.array
};
