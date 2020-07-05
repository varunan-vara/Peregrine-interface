import React, {Component} from 'react';
import './Styles.css';

class BlacklistFunc extends Component {

    constructor(props) {
        super(props)
        this.state={input:''}
      }
    
      getInputValue() {
        return this.refs.input.value
      }

    render() {
        return(
            <div id="BlackList">
                <table>
                    <tr>
                        <th>
                            <div className="boxlong" id="titlebox">
                                <h2 className="longerflex">BlackList</h2>
                            </div>
                            <div className="boxlong" id="recentsbox">
                                <form>
                                    <p className="terminal" id="terminalinput" style={{float:"left"}}>Add Domain:</p>
                                    <input ref = "input" type="text" id="myid" className="textinput" name="" placeholder=""></input>
                                </form>
                            </div>
                            <div className="boxlong" id="recentsbox">
                                <p className="terminal"><br />
                                    https://www.sketchysite.ca <br />
                                    https://idkanymore.org
                                </p>
                            </div>
                        </th>
                    </tr>
                </table>
            </div>
        );
    }
}


export default BlacklistFunc;