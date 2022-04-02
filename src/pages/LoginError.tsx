import React, { useEffect, useState } from "react"
import { Button, Box } from "@mui/material"
import { useAuth0 } from "@auth0/auth0-react"
import { useDispatch, useSelector, RootStateOrAny } from "react-redux"
import { changeUser } from '../redux/userSlice';
import { Navigate } from "react-router-dom";

const LoginError = () => {
  const { loginWithPopup , isAuthenticated, user, getAccessTokenSilently } = useAuth0()
  

  const dispatch = useDispatch()
  useEffect(() => {
    getAccessTokenSilently()
        .then(auth0Token => {
              dispatch(changeUser({
              email: user?.email,
              name: user?.given_name,
              isLogged: isAuthenticated,
              auth0Token
            }))
          })
  },[isAuthenticated])
  const handleLogin = () => {
    loginWithPopup()
  }
  // if(isAuthenticated){
  //   return <Navigate to="/" />
  // }
  return <div style = {{width:"100vw",height:"100vh", backgroundColor:"#f4f4f9", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
    <Box boxShadow={3} alignItems="center" sx={ {display: "flex", backgroundColor:"#FFF" , width: "60%", flexDirection:"column", borderRadius: "10px"}}>
      <h1 style={{color:"#2a2857", margin:"1em"}}>Mistplay</h1>
      <h2 style={{color:"#2a2857"}}>Fraud Actions Dashboard</h2>
      <Button variant="contained" style={{margin:"1em", backgroundColor:"#2a2857"}} onClick={handleLogin}>Login</Button>
    </Box>
    </div>
}

export default LoginError