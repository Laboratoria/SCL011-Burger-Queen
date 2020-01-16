import React from "react";

class ButtonBasic extends React.Component {
  state = {};
  //   handleClick = e => {
  //     console.log("click ok");
  //   };
  render() {
    return (
      <div>
        <input type="button" className="btn btn-success" value={this.props.name} />
      </div>
    );
  }
}

export default ButtonBasic;
