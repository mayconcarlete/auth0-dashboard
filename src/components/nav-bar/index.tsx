import React from "react"

import LoginButton from "./login"
import LogoutButton from "./logout"
import { useAuth0 } from "@auth0/auth0-react"

const NavBar = () => {
  const { isAuthenticated} = useAuth0()
  return isAuthenticated ? <LogoutButton/> : <LoginButton/>

}

export default NavBar