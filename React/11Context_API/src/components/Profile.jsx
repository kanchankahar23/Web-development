import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
function Profile() {
    const { user } = useContext(UserContext);
    if (!user) return <div>Please login </div>
    return (
        <>
              <div>Welcome {user.username}</div>
        <div> Password is {user.Password}</div>
        </>
  
    )
}

export default Profile