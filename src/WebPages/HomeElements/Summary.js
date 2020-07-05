import React, {Component} from 'react';
import './../Styles.css';
import styled, { css } from 'styled-components';
import Popup from "reactjs-popup";



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

class Summary extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
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
            <div id="Summary">
                <div className="box" id="titlebox">
          <h2>Summary</h2>
          <Button primary className="button" onClick={this.openModal}>See More</Button>
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
          {/*include future items here*/}
          <p class="terminal"><br />
            Jun 12 - 14:56 - Malicious Website Detected <br />
            Jun 12 - 15:01 - Malicious Website Detected <br /><br /><br /><br /><br /><br /><br /><br /><br />
          </p>
          </div>
        </div>
        );
    }
}

export default Summary;