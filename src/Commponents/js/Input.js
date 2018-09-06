import React, { Component } from "react";

class Inpute extends Component {
  render() {
    return (
      <div>
        <label>
          <span className="tb5">{this.props.label}</span>
          <input
            type={this.props.type}
            onChange={this.props.onChange}
          />
        </label>
      </div>
    );
  }
}

export default Inpute;
