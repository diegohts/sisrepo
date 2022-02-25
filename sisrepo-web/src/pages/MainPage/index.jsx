import React from "react";
import "./styles.css";

const MainPage = () => {
    const handleLogout = () => {
        console.log('Logout');
    }

    const handleSearch = (query) => {
        console.log('Search: ',query);
    }

    const handleClear = () => {
        console.log('Clear');
    }

    const handleDeleteRepo = () => {
        console.log('Delete Repo');
    }

    return (
        <div id="main">
            <div className="nav">
                <h1 className="logo">SisRepo</h1>

                <button onClick={handleLogout}>Sair</button>
            </div>

            <div className="search">
                <label htmlFor="query">Procurar: </label>
                <input type="search" name="query" id="query" />
                <button onClick={handleClear}>Limpar</button>
                <button onClick={handleSearch}>Procurar</button>
            </div>

            <div className="repositories">
                <h2 className="title">Repositórios</h2>

                <ul className="list">
                    <li className="item">
                        <div className="info">
                            <div className="owner">facebook</div>
                            <div className="name">react</div>
                        </div>
                        <button onClick={handleDeleteRepo}>Apagar</button>
                    </li>

                    <li className="item">
                        <div className="info">
                            <div className="owner">facebook</div>
                            <div className="name">react</div>
                        </div>
                        <button onClick={handleDeleteRepo}>Apagar</button>
                    </li>
                </ul>

                <div className="new">
                    <label htmlFor="new-repo">Novo Repositório: </label>
                    <input type="url" name="new-repo" id="new-repo" />
                    <button onClick={handleClear}>Adicionar</button>
                </div>
            </div>
        </div>
    )
}

export default MainPage;