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

function ReviewsItem() {
  return <h3>{}</h3>;

} 

function App () {
  return (
    <>
        {/* <div className="wrapper">
            <Header/>
            <Content/>
            <Sitebar/>
            <Footer/>
        </div> */}

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
              
          

    </>

  );
  }

export default App;
