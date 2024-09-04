import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Ex8 from "./exercicios/Ex_8";
import Ex9 from "./exercicios/Ex_9";
import Ex10 from "./exercicios/Ex_10";
import Ex11 from "./exercicios/Ex_11";
import Ex12 from "./exercicios/Ex_12";
import './App.css';

const App = () => {
  return (
    <div>
      <h1>Teste de Performance 2</h1>
      <Router>
        <div className="app-container">
          <nav>
            <ul className="app-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/exercicio8">Exercicio 8</Link></li>
              <li><Link to="/exercicio9">Exercicio 9</Link></li>
              <li><Link to="/exercicio10">Exercicio 10</Link></li>
              <li><Link to="/exercicio11">Exercicio 11</Link></li>
              <li><Link to="/exercicio12">Exercicio 12</Link></li>
            </ul>
          </nav>
          <main>
            <section className="grid">
              <Routes>
                <Route path="/" element={<h1>Welcome to my app!</h1>} />
                <Route path="/exercicio8" element={<Ex8 />} />
                <Route path="/exercicio9" element={<Ex9 />} />
                <Route path="/exercicio10" element={<Ex10 />} />
                <Route path="/exercicio11" element={<Ex11 />} />
                <Route path="/exercicio12" element={<Ex12 />} />
              </Routes>
            </section>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;