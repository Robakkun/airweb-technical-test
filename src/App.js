import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import logo from './media/logo.png';
import './App.css';

import { Provider } from 'react-redux';
import store from './store'
import ShoppingCartIcon from './components/shoppingCartIcon';
import Catalogue from './views/catalogue';
import Cart from './views/cart';
import Payment from './views/payment';
import Error404 from './views/error404';

import routes from './constants/routes';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <header className="App-header">
            <div className='logo'>
              <img src={logo} height={30} width={100}></img>
            </div>
            <ShoppingCartIcon />
          </header>
          <div className='content'>
            <Routes>
              <Route
                exact
                path='/'
                element={<Navigate to={routes.Catalogue} replace />}
              >
              </Route>
              <Route
                exact
                path={routes.Catalogue}
                element={<Catalogue />}
              />
              <Route
                exact
                path={routes.Cart}
                element={<Cart />}
              />
              <Route
                exact
                path={routes.Payment}
                element={<Payment />}
              />
              <Route
                exact
                path='*'
                element={<Error404 />}
              />
            </Routes>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
