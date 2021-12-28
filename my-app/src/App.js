import React, { Children } from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import './ComponentsRoute/Main.css';
import './Layout/Layout/Layout.css';
import { Link, NavLink } from "react-router-dom";


import Home from './ComponentsRoute/Home'
import Contacts from './ComponentsRoute/Contacts'
import Reviews from './ComponentsRoute/Reviews'
import Menu from './ComponentsRoute/Menu';
import { Page404 } from './ComponentsRoute/Page404';
// import ReviewsItem from './ComponentsRoute/ReviewsItem'
import Header from './Layout/Layout/Header';
import Content from './Layout/Layout/Content';
import Sitebar from './Layout/Layout/Sidebar';
import Footer from './Layout/Layout/Footer';
import { createStore, combineReducers } from 'redux'
import {createSlice, configureStore} from "@reduxjs/toolkit"
import {Provider} from "react-redux"
import Product from "./store/store/Product"

import TodoForm from './todo/TodoForm';
import TodoList from './todo/TodoList';
import TotalCompleteItems from './todo/TotalCompleteItems';



const App = () => {
	return (
		<div className='container'>
			<h1>Todo App</h1>
			<TodoForm />
			<TodoList  />
			<TotalCompleteItems />
		</div>
	);
};



export default App;
