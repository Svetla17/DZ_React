import React from 'react';
import { createStore, combineReducers } from 'redux'
import {createSlice, configureStore} from "@reduxjs/toolkit"
import {Provider} from "react-redux"


// --------------DZ #7----------------


let initialState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers:{
    addProduct: (state, action) => {
      let product = action.payload.id;
      state.products.push(product);
    },
    deleteProduct: (state, action) => {
      let product = action.payload.id;
      state.products = state.products.filter(item => item !== product)
    },
    changeProduct: (state, action) => {
      let product = action.payload.id;
      state.products = state.products.map(item => item * 10)   
     }
  }
  
})
const {addProduct, deleteProduct, changeProduct} = productSlice.actions;
const store = configureStore({
  reducer: productSlice.reducer,
})


store.dispatch(addProduct({ name: "1", price: 11, id: 1,}));
store.dispatch(addProduct({ name: "2", price: 22, id: 2,}));
store.dispatch(addProduct({ name: "3", price: 33, id: 3,}));
console.log(store.getState())

store.dispatch(deleteProduct({ name: "2", price: 22, id: 2,}));
console.log(store.getState())

store.dispatch(changeProduct({}));
console.log(store.getState())



// ________________________________________________________