import React, { Children } from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import './ComponentsRoute/Main.css';
import { Link, NavLink } from "react-router-dom";


import Home from './ComponentsRoute/Home'
import Contacts from './ComponentsRoute/Contacts'
import Reviews from './ComponentsRoute/Reviews'
import Menu from './ComponentsRoute/Menu';
import { Page404 } from './ComponentsRoute/Page404';
// import ReviewsItem from './ComponentsRoute/ReviewsItem'

function ReviewsItem() {
  return <h3>{}</h3>;

} 

function App () {
  return (
    <div className="App"> 
      <BrowserRouter> 
          <Menu></Menu>
        <Routes> 
          <Route path="/" element={<Home />}/>            
          <Route path="contacts" element={<Contacts />}/>              
          <Route path="reviews" element={<Reviews />} > 
            <Route path="reviewsItem" element={<ReviewsItem />} />            
          </Route>
          <Route path="*" element={<Page404 />} />           
        </Routes>         
      </BrowserRouter>
      
    </div>
  );
  }

export default App;
