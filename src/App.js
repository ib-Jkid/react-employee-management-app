import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeConponent from './components/UpdateEmployeeConponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
     
          <HeaderComponent />
          <div className="container">
            <Switch>
            
              <Route path="/" exact component = {ListEmployeeComponent}></Route>
              <Route path="/employees" exact component = {ListEmployeeComponent}></Route>
              <Route path="/add-employee" exact component = {CreateEmployeeComponent}></Route>
              <Route path="/update-employee/:id" exact component = {UpdateEmployeeConponent}></Route>
              <Route path="/view-employee/:id" exact component = {ViewEmployeeComponent}></Route>


           
            </Switch>

          </div>
          <FooterComponent />
      
      </Router>

    </div>

  );
}

export default App;
