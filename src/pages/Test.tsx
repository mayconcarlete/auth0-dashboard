import React, { useEffect } from "react"
import { Link, Route, Routes } from "react-router-dom"
import NavBar from "../components/nav-bar"
import LoginButton from "../components/nav-bar/login"
import ErrorPage from "./ErrorPage"
import Home from "./Home"
import LoginError from "./LoginError"
import PrivateRoute from "./PrivateRoute"
import Profile from "./Profile"
import User from "./User"
import { useAuth0 } from "@auth0/auth0-react"
import LogoutButton from "../components/nav-bar/logout"

const Test = () => {
  return <>
          <nav>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/profile">Appeals</Link>
        <LogoutButton />
       <LoginButton />
      </nav>

    {/* <LoginButton /> */}

      <Routes>
        <Route path='/' element = {<PrivateRoute><Home /></PrivateRoute>}></Route>
        <Route path='/user' element = {<PrivateRoute><User /></PrivateRoute>}></Route>
        <Route path='/profile/:username' element = {<Profile />}></Route>
        <Route path='/login' element = {<LoginError/>}></Route>
        <Route path='*' element = {<ErrorPage />}></Route>
      </Routes></>
}

export default Test