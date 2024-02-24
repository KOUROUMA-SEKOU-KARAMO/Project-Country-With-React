import React from 'react';
import {BrowserRouter ,Routes , Route } from "react-router-dom"; 
import Home from './components/Home';
import About  from './components/About';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import "./assets/styles/index.scss"; 




const App = () => {
  return (
    <div className='contaainer-app'>
         <BrowserRouter>  
           <Logo/>
           <Navbar />
         <Routes>
           <Route path='/home' element={<Home/>}></Route>
           <Route path='/about' element={<About/>}></Route>
         </Routes>
         </BrowserRouter>
    </div>
  );
};

export default App;