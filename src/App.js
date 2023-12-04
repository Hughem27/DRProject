import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import DisplayCart from './Components/DisplayCart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import About from './Components/About';
import Home from './Components/Home';


const App = () => {


  return (
    <div>

      <BrowserRouter>

        {/* <Header></Header> */}
        <div>
          {/* Navbar from bootstrap */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container px-4 px-lg-5">
                <a className="navbar-brand
                " href="home">DataRep</a>              
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="home">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="shop">Shop</a></li>
                    <li className="nav-item"><a className="nav-link" href="about">About</a></li>
                    

                  </ul>                  
                  <form className="d-flex">
                    <a href="cart" className="btn btn-outline-light" role="button">
                      <i className="bi-cart-fill me-1"></i>
                      Cart
                      <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                    </a>
                  </form>
                </div>
              </div>
            </nav>

        </div>

        <div>
        <Routes>
              <Route path='/home' element={<Home></Home>}></Route>
              <Route path='/shop' element={<DisplayCart></DisplayCart>}></Route>
              <Route path='/about' element={<About></About>}></Route>
              <Route path='/cart' element={<DisplayCart></DisplayCart>}></Route>              
            </Routes>
        </div>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default App;