import React from "react"
import { useNavigate, useParams } from "react-router-dom"
const Profile = () => {
  let navigate = useNavigate()
  let { username } = useParams()
  return <div>Profile of {username}! <button onClick={() => {navigate("/about")}}>Change to about</button></div>
}

export default Profile