import React, { Component } from "react";
import "../css/modal.css";

class Modal extends Component {
  render() {
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close">&times;</span>
            <h2>{this.props.header}</h2>
          </div>
          <div className="modal-body">
            <p>{this.props.mainText}</p>
            <p>{this.props.contentText}</p>
          </div>
          <div className="modal-footer">
            <h3>{this.props.footer}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
