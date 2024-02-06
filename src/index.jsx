import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Calculator from "./pages/Calculator"
import Game from "./pages/Game"
import Home from "./pages/Home"


function App() {
  return (
    <BrowserRouter>
    <header>
      <Link className="site-logo" to="https://www.linkedin.com/in/tatiana-vinogradova-670499112/">#Resume</Link>
      <p></p>
      <nav>
        <Link to="/game">Game</Link>
        
        <Link to="/calculator">Calculator</Link>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
    </BrowserRouter>
  )
}

ReactDOM
.createRoot(document.getElementById('root'))
.render(
  <App />
);