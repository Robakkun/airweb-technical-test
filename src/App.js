import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import logo from './media/logo.png';
import './App.css';

import { Provider } from 'react-redux';
import store from './store'
import ShoppingCartIcon from './components/shoppingCartIcon';
import Catalogue from './views/catalogue';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <div className='logo'>
            <img src={logo} height={30} width={100}></img>
          </div>
          <ShoppingCartIcon />
        </header>
        <Router>
          <Routes>
            <Route
              exact
              path='/'
              element={<Navigate to="/catalogue" replace />}
            >
            </Route>
            <Route
              exact
              path='/catalogue'
              element={<Catalogue />}
            />
            <Route
              exact
              path='/cart'
              element={<div>Cart</div>}
            />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
