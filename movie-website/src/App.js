import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import { Routes, Route} from "react-router-dom"
import LoginScreen from './LoginScreen';
import { auth } from './firebase';

function App() {
  const user = null

  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        //logged in

      }else{
        //logged out

      }
    })
  },[])


  return (
    <div className="app">
      {!user? (
          <LoginScreen/>
       ): (
      <Routes>
       <Route exact path='/' element={<HomeScreen/>}/>
      </Routes>)}
       
    </div>
  );
}

export default App;
