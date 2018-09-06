import React, { Component } from "react";
import Button from "./Commponents/js/Button";
import Inpute from "./Commponents/js/Input";
import Modal from "./Commponents/js/Modal";

class UrlBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUrl: "",
      intLike: 0
    };
  }
  updateUrlInput(e) {
    this.setState({ txtUrl: e.target.value });
    ///document.getElementById("p").innerText = e.target.value || '';
  }

  updateLikeInput(e) {
    this.setState({ intLike: e.target.value });
    document.getElementById("k").innerText = e.target.value * 0.5 + " تومان";
  }

  pay(e) {
    this.setState({ intLike: e.target.value });
    document.getElementById("k").innerText =
      " تومان " + Math.round(e.target.value * 0.5 * 1.09);
  }

  openModal(e) {
    console.log("hgjjghj");
    let modal = document.getElementById("myModal");
    let span = document.getElementsByClassName("close")[0];

    console.log(modal);
    modal.style.display = "block";

    span.onclick = function() {
      modal.style.display = "none";
    };
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

  render() {
    return (
      <div>
        <a href={this.state.txtUrl}  target="_blank">{this.state.txtUrl}</a>
        <Inpute
          type="text"
          label="URL"
          onChange={e => this.updateUrlInput(e)}
        />
        <Inpute type="text" label="Count" onChange={e => this.pay(e)} />
        <Button text="Likee!" id="k" />
        <Button text="Modal!" id="k" onClike={e => this.openModal(e)} />
        <Modal header="آماده پرداهت" mainText={this.state.txtUrl} contentText={this.state.intLike} footer="پزداخت  کن"/>
      </div>
    );
  }
}

export default UrlBox;
