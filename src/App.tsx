import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react"
import { BrowserRouter as Router, Routes, Route, Link,  } from "react-router-dom"
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import NavBar from './components/nav-bar';
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading} = useAuth0()
  return (
    <Router>
     <Auth0Provider
    domain="dev-hqo639s8.us.auth0.com"
    clientId=""
    redirectUri={window.location.origin}
    audience="https://quickstarts/api"
    scope="read:user"
  >
      <NavBar />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path='/' element = {<Home />}></Route>
        <Route path='/profile/:username' element = {<Profile />}></Route>
        <Route path='/about' element = {<About />}></Route>
        <Route path='*' element = {<ErrorPage />}></Route>
      </Routes>
      </Auth0Provider>
    </Router>
  );
}

export default App;
