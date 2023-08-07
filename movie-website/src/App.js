import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import { Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="app">
        <Routes>
          <Route path='/' element={<HomeScreen/>}/>
        </Routes>
    </div>
  );
}

export default App;
