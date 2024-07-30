import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './pages/main';
import { Catalog } from './pages/catalog';
import { Favorites } from './pages/favorites';
import { Cart } from './pages/cart';
import { Checkout } from './pages/checkout';
import { Profile } from './pages/profile';

export const RoutesFind = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  );
};
