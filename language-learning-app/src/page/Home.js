import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              console.log("uid", uid)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }
          })
    }, [])

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/');
            console.log("Signed out successfully");
        }).catch((error) => {
            // An error happened.
        });
    }
    
    return (
        <>
            <h1>Home</h1>
            <button onClick={handleLogout}>
                Logout
            </button>
        
        </>
    );
};

export default Home;