import React from "react";
import "./styles.css";

const Nav = ({ onLogout }) => {

    return (
        <div className="nav">
            <h1 className="logo">SisRepo</h1>

            <button onClick={onLogout}>Sair</button>
        </div>
    )
}

export default Nav;