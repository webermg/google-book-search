import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar'
import Search from './components/pages/Search'
import Saved from './components/pages/Saved'

function App() {
  return (
    
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path={'/',"/search"} component={Search}/>
            <Route path="/saved" component={Saved}/>
          </Switch>
        </div>
      </Router>
    
  );
}

export default App;
