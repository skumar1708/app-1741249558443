import React from 'react';
import Game from './components/Game';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Tic-Tac-Toe</h1>
      </header>
      <main>
        <Game />
      </main>
      <footer className="app-footer">
        <p>Developed by [Your Name]</p>
      </footer>
    </div>
  );
}

export default App;