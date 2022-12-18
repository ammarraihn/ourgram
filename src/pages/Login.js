import "../style/Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "ammar" & pass === "191221" || username === "anien" & pass === "191221") {
            console.log("Login successful");
            navigate("/gallery");
            localStorage.setItem("user", "admin");
            alert("Halo "+ username+"! Welcome to ourgram.");
        } else {
            alert("Invalid credentials");
        }
    }

    return (
        <div className="auth-form-container">
            <div className="navlog">
                <img className="logo" src={require("../images/key_heart.png")} alt="logo"/>
                <h2 className="ourgram">ourgram.</h2>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="usertitle">username</div>
                <input className="username" value={username} onChange={(e) => setUsername(e.target.value)} id="username" name="username" />
                <div className="passtitle">password</div>
                <input className="password" value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />
                <button className="login-btn" type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Login;
