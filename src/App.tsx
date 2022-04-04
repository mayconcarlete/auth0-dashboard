import React, { useEffect } from 'react';
import logo from './logo.svg';
import { useAuth0 } from "@auth0/auth0-react"
import { BrowserRouter as Router, Routes, Route, Link,  } from "react-router-dom"
import Home from './pages/Home';
import Profile from './pages/Profile';
import User from './pages/User';
import ErrorPage from './pages/ErrorPage';
import NavBar from './components/nav-bar';
import { Auth0Provider } from "@auth0/auth0-react";
import PrivateRoute from './pages/PrivateRoute';
import LoginError from './pages/LoginError';
import LoginButton from './components/nav-bar/login';
import Test from './pages/Test';

function App() {
  return (
    <Router>
     <Auth0Provider
        domain="dev-hqo639s8.us.auth0.com"
        clientId=""
        redirectUri='http://localhost:3001/'
        organization='org_rIDEc47EBDuCLkCQ'
  >
    <Test />

      </Auth0Provider>
    </Router>
  );
}

export default App;
