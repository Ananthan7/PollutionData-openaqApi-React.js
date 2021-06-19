import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Citydetails from './components/Citydetails';

function App() {
  return (
    <Router>
      <div className="Appcomponent">
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/citydetail/:city" component={Citydetails} />
        </Switch>
      
      </div>
    </Router>
  );
}

export default App;
