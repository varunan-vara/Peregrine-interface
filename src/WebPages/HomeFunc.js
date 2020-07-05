import React, {Component} from 'react';
import './Styles.css';
import Summary from './HomeElements/Summary';
import MemberInfo from './HomeElements/Member';



class HomeFunc extends Component {

  render() {
    return(
      <div id="Home">
    <table>
      <tr>
        <th>
        <Summary />      
        </th>
        <th>
        <MemberInfo />
        </th>
      </tr>
    </table>
  </div>
    );
  }
  
}


export default HomeFunc;