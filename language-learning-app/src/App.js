import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Home from './page/Home';
import Signup from './page/Signup';
import Login from './page/Login';
import Landing from './page/Landing';
import ForgetPassword from './page/ForgetPassword';
import Quiz2 from './page/Quiz2';
import Quiz from './page/Quiz';
import './App.css';
import LessonData from './data/LessonData.json';

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
              <Route path="/forget-password" element={<ForgetPassword/>}/>
              {LessonData.map(lesson => (
                <Route key={lesson.id} path={`${lesson.url}`} element={<Quiz/>}/>) 
              )}
              <Route path="/testing-quiz" element={<Quiz2 />} />
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}
 
export default App;