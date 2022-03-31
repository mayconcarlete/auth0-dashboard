import React, { ReactChildren, ReactChild } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

interface AuxProps {
  children: ReactChild | ReactChildren;
}
const PrivateRoute  = ({children}: any) => {

  const { user, isAuthenticated, isLoading} = useAuth0()
  return  isAuthenticated ? children : <Navigate to="/login-error" />
}

export default PrivateRoute