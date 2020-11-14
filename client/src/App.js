import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Header/>
          <Route path="/search" component={Search}/>
          <Route path="/saved" component={Saved}/>
          <Route path="/" component={Search}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
