import logo from './logo.svg';
import './App.css';
import Main from './Axios_Assignment/Main';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './Routing_Assignment/Header';
import Home from './Routing_Assignment/Home';
import Mounting from './Routing_Assignment/Mounting';
import Updating from './Routing_Assignment/Updating';
import Unmounting from './Routing_Assignment/Unmounting';


function App() {
  return (
    <div className="App">

      {/* Axios_Assignment */}
      {/* <Main /> */}

      {/* Routing_Assignment */}

      <Router>
        <div>
          <Header />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/mount">
              <Mounting />
            </Route>
            <Route exact path="/update">
              <Updating />
            </Route>
            <Route exact path="/unmount">
              <Unmounting />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
