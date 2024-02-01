import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/home';
import { NotFound } from './pages/notFound';
import { Category } from './pages/category';
import { Recipe } from './pages/recipe';

export const App = () => {
  return (
    <>
      <Header />
      <main className='content  lime lighten-4'>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/category/:name'
            element={<Category />}
          />
          <Route
            path='/meal/:id'
            element={<Recipe />}
          />
          <Route
            path='*'
            exact={true}
            element={<NotFound />}
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
};
