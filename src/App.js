
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginForm from './components/login';
import HomePage from './components/home';
import GuestRoute from './components/GuestRoute';
import PrivateRoute from './components/PrivetRoute';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<PrivateRoute/>}>
         <Route path='/home' element={<HomePage />} />
         <Route path='/product' element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        </Route>
        <Route path="/login" element={<GuestRoute><LoginForm /></GuestRoute> } />
      </Routes>
    </Router>
  );
};
export default App;

