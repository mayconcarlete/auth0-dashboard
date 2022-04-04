import React, { useEffect } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router } from "react-router-dom"
import { Auth0Provider } from "@auth0/auth0-react";
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
