import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div>
        <span className="tb5" />
        <button 
        className="btn success" 
        id={this.props.id} 
        onClick={this.props.onClike}>
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default Button;
