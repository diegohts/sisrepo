import React, { useState } from "react";
import "./styles.css";

const Repositories = ({ repositories, onDelete, onAddRepo }) => {
    const [ newRepo, setNewRepo ] = useState('');

    return (
        <div className="repositories">
            <h2 className="title">Repositórios</h2>

            <ul className="list">
                <li className="item">
                    <div className="info">
                        <div className="owner">facebook</div>
                        <div className="name">react</div>
                    </div>
                    <button onClick={() => onDelete(null) }>Apagar</button>
                </li>
            </ul>

            <div className="new">
                <label htmlFor="new-repo">Novo Repositório: </label>
                <input 
                    type="url" 
                    name="new-repo" 
                    id="new-repo" 
                    value={ newRepo }
                    onChange={(e) => setNewRepo(e.target.value)}
                />
                <button onClick={onAddRepo}>Adicionar</button>
            </div>
         </div>
    )
}

export default Repositories;