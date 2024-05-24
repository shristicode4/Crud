import { useState } from 'react'
import './styles.scss';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import H1 from '../components/Heading'
import Home from './components/Home';

function App() {
  

  return (
    <div className="App">
    <Router> 
<Routes>
  <Route path="/" element={<Home />} />

</Routes>
</Router> 


      
    </div>
  );
}

export default App
