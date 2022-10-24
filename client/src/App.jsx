import React from 'react'
import './dist/style.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Fileupload from './components/Fileupload';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Gallery />} />
        <Route exact path="/upload" element={<Fileupload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
