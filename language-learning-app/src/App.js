import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Home from './page/Home';
import Signup from './page/Signup';
import Login from './page/Login';
import Landing from './page/Landing';
import ForgetPassword from './page/ForgetPassword'; 

function App() {
 
  return (
    <Router>
      <div>
        <section>                              
            <Routes>
              <Route path="/" element={<Landing/>}/>                                                            
              <Route path="/home" element={<Home/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/forgetpassword" element={<ForgetPassword/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}
 
export default App;