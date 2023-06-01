import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
        <Routes>
          <Route
            exact
            path='/'
          >
            <Redirect to="/catalogue" />
          </Route>
          <Route
            exact
            path='/catalogue'
            element={<div>Catalogue</div>}
          />
          <Route
            exact
            path='/cart'
            element={<div>Cart</div>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
