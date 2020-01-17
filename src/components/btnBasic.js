import React from "react";

class ButtonBasic extends React.Component {
  state = {};
  handleChange = e => {
    console.log({ e });
  };
  render() {
    return (
      <div>
        <input onChange={this.handleChange} type="button" className="btn btn-success" value={this.props.name} />
      </div>
    );
  }
}

export default ButtonBasic;
