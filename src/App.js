import React from 'react';
import Routes from './Router/Router';
import Navbar from './Components/Navbar';
import "./App.css"


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
