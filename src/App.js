import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './Header/Header'; 
import { Home } from './WebPages/Home';
import { About } from './WebPages/WhiteList';
import { NoMatch } from './WebPages/NoMatch';
import { BlackList} from './WebPages/BlackList';
import { Settings } from './WebPages/Settings';
import './WebPages/Styles.css';

function App() {
  return (
    <div className="App">
      <React.Fragment>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blacklist"component={BlackList} />
          <Route path="/settings"component={Settings} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
    </div>
  );
}

export default App;
