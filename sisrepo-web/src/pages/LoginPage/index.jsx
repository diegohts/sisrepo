import React from "react";
import "./styles.css";

const LoginPage = () => {
    const handleLogin = () => {
        console.log('login');
    }
    return (
        <div id="login">
            <h1 className="title">Login</h1>
            <div className="form">
                <div className="field">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" />
                </div>

                <div className="field">
                    <label htmlFor="password">Senha:</label>
                    <input type="password" name="password" id="password" />
                </div>

                <div className="actions">
                    <button onClick={handleLogin}>Entrar</button>
                </div>
            </div>
        </div>
    )
};

export default LoginPage;