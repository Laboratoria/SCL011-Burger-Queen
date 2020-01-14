import React from "react";

class ButtonBasic extends React.Component {
  state = {};
  handleClick = e => {
    console.log("click ok");
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick} value={this.state.name}>
          {this.props.name}
        </button>
      </div>
    );
  }
}

export default ButtonBasic;
