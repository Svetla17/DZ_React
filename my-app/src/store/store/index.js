import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, combineReducers } from 'redux'
import {createSlice, configureStore} from "@reduxjs/toolkit"
import {Provider} from "react-redux"
import {store} from "./store"

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

// let initialState = {
//   users: [],
// };

// const ADD_USER = "ADD_USER"
// const DELETE_USER = "DELETE_USER"


// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers:{
//     addUser: (state, action) => {
//       let user = action.payload.user;
//       state.users.push(user);
//     },
//     deleteUser: (state, action) => {
//       let user = action.payload.user;
//       state.users = state.users.filter(item => item !== user)
//     }
//   }
// })


// const reducer = (state = initialState, action) => {
//   switch (action.type){
//     case "ADD_USER": {
//       let user = action.payload.user;
//       let newUsers = [...state.users, user];
//       return {...state, users: newUsers};
//     }
//     case "DELETE_USER": {
//       let user = action.payload.user;
//       let newUsers = state.users.filter(item => item !== user)
//       return {...state, users: newUsers};
//     }

    
//     default: {
//       return state ;
//     }
//   }
// };
//   const {addUser, deleteUser} = userSlice.actions;
//   const store = configureStore({
//     reducer: userSlice.reducer,
//   })



  // const store = createStore(reducer);
  // const addUser = (user) => ({type: ADD_USER, payload: {user}})
  // const deleteUser = (user) => ({type: DELETE_USER, payload: {user}})
  // store.dispatch(addUser({ user :"Maks1"}));
  // store.dispatch(addUser({ user :"Maks2"}));
  // store.dispatch(addUser({ user :"Maks3"}));

  // console.log(store.getState())

  // store.dispatch(deleteUser({ user :"Maks1"}));
  // store.dispatch(deleteUser({ user :"Maks2"}));
  // console.log(store.getState())

  // export const {addUser, deleteUser} = userSlice.actions
  // export default store 
