import React ,{ useEffect, useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import {RootStateOrAny, useDispatch, useSelector} from "react-redux"
import { changeUser } from "../redux/userSlice"

const Home = () => {
  const { isAuthenticated, user } = useAuth0()
  const state = useSelector(( state:RootStateOrAny ) => state)
  return <>
  <div>HOME PAGE</div>
  {/* <button onClick={() => console.log(state, isAuthenticated, user)}>Clique para ver dados</button> */}
  </>
}

export default Home