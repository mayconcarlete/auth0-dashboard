import React, { ReactChildren, ReactChild, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux"
import { changeUser } from '../redux/userSlice';
interface AuxProps {
  children: ReactChild | ReactChildren;
}
const PrivateRoute  = ({children}: any) => {
  const state = useSelector(( state:RootStateOrAny ) => state)
  
  return  state.user.user ? children : <Navigate to="/login" />
}


export default PrivateRoute