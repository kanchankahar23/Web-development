import React from "react";
import { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [username, setUsername] = useState("");
    const [Password, setPassword] = useState("");


    const { setUser } = useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, Password })
    }

    return (
        <div>
            <h1>Login</h1>

            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="enter username" />

            <input
                value={ Password}
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                value={Password}
                placeholder="Enter Password" />


            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login