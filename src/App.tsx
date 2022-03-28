import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react"

function App() {
  const { user, isAuthenticated, isLoading} = useAuth0()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Maycon and React
        </a>
        <button onClick={() => console.log(user, isAuthenticated, isLoading)}> clique para ver os dados</button>
      </header>
    </div>
  );
}

export default App;
