import './App.css';
import Dashboard from './pages/Dashboard/Dashboard.container';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (   
    <Router>
      <div className="App">
        <h1>Header</h1>
        <h2>title</h2>
        <Dashboard />
      </div>
    </Router>
  );
}

export default App;
