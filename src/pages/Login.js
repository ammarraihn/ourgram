import "../style/Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "admin" && pass === "admin") {
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
                <input className="username" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="username" id="email" name="email" />
                <div>password</div>
                <input className="password" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className="login-btn" type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Login;
