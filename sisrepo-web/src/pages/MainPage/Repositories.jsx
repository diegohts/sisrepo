import React, { useState } from "react";
import "./styles.css";

const Repositories = ({ repositories, onDelete, onAddRepo }) => {
    const [ newRepo, setNewRepo ] = useState('');

    return (
        <div className="repositories">
            <h2 className="title">Repositórios</h2>

            <ul className="list">
                {
                    repositories.map((repository) => (
                        <li className="item" key={repository._id}>
                            <div className="info">
                                <div className="owner">
                                    {repository.name.substring(0, repository.name.indexOf('/'))}
                                </div>
                                <div className="name">
                                    {repository.name.substring(repository.name.indexOf('/') + 1)}
                                </div>
                            </div>
                            <button onClick={() => onDelete(null)}>Apagar</button>
                        </li>
                    ))
                }

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