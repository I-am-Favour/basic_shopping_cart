import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartContextProvider } from './contexts/CartContext';
import { FilterContextProvider } from './contexts/FilteredContext';
import { ProductContextProvider } from './contexts/ProductsContext';
ReactDOM.render(
  <ProductContextProvider>
    <FilterContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </FilterContextProvider>
  </ProductContextProvider>,
  document.getElementById('root')
);
