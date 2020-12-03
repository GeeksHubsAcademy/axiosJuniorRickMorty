import logo from './logo.svg';
import './App.css';
import Home from './containers/Home/Home';

//React router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


//Importacion de containers & componentes

import Characterdetail from './containers/Characterdetail/Characterdetail';
import Register from './containers/Register/Register';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Characterdetail" exact component={Characterdetail} />
          <Route path="/Register" exact component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
