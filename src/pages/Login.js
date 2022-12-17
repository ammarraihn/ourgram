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
        } else {
            alert("Invalid credentials");
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <div>username</div>
                <input className="username" value={username} onChange={(e) => setUsername(e.target.value)} id="username" name="username" />
                <div>password</div>
                <input className="password" value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />
                <button className="login-btn" type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Login;
