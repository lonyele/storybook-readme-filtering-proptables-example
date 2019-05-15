import React from "react";
import PropTypes from "prop-types";

export class ThirdButton extends React.Component {
  render() {
    return (
      <button>
        {this.props.content}
        {this.props.name}
      </button>
    );
  }
}

ThirdButton.defaultProps = {
  name: "ThirdButton~~",
  variant: 'success'
};

ThirdButton.propTypes = {
  content: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['success', 'normal', 'warning', 'alert']),
};
