import React, {Component} from 'react';
import './../Styles.css';
import styled, { css } from 'styled-components';
import Popup from "reactjs-popup";
import members from "./../../members.json";

const memberslist = members;

var a = JSON.stringify(memberslist).split("{").join("");
var b = a.split("}").join("");
var c = b.split("[").join("");
var d = c.split("]").join("");
var f = d.split('"').join("");
var g = f.split("members:").join('');
var h = g.split(",number:").join("---");
var i = h.split("name:").join("");
var j = i.split(",").join("<br />");

function displayJSON () {
  var output = "\n//Within the past 7 days: \n";
  return output;
}

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #F45B69;
  color: #F45B69;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: #F45B69;
    color: white;
  `}
`;


class MemberInfo extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false, copyText: "--" };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }
      openModal() {
        this.setState({ open: true });
      }
      closeModal() {
        this.setState({ open: false });
      }



      render() {
          return(
              <div className="memberinfo">
                  <div className="box" id="titlebox2">
          <h2>Senders</h2>
          <Button primary className="button" onClick={this.openModal}>Ban Members</Button>
        </div>
        <Popup
            open={this.state.open}
            closeOnDocumentClick
            onClose={this.closeModal}
          >
            <div className="modaltab">
              <a className="close" onClick={this.closeModal} style={{cursor: 'pointer'}}>
                &times;
              </a>
              <div className="box" id="titlebox"><h2>History</h2></div>
              <div className="box" id="recentsbox"><p className="terminal">Nothing here yet!<br /><br /><br /><br /><br /><br /></p></div>
            </div>
          </Popup>
        <div className="box" id="recentsbox">
          <p class="terminal" id="info">{displayJSON()}</p>
        </div>
        </div>
          );
      }
}



export default MemberInfo;