import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { Navigate } from "react-router-dom"

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  return<>
      <button onClick={() => loginWithRedirect()}>Log In</button>
   </>
}

export default LoginButton