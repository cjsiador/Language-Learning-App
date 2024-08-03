import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Home from './page/Home';
import Signup from './page/Signup';
import Login from './page/Login';
import Landing from './page/Landing';
import ForgetPassword from './page/ForgetPassword';
import Quiz from './page/Quiz';
import './App.css';

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
              <Route path="/quiz" element={<Quiz/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}
 
export default App;