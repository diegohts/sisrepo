import React, { useState, useEffect } from "react";
import { getRepositories } from "../../services/api";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Repositories from "./Repositories";
import Search from "./Search";
import "./styles.css";

const userId= '620ed1a0eea97a9d780715d0';

const MainPage = () => {
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingError, setLoadingError] = useState(false);

    const loadData = async (query = '') => {
        try {
            setLoading(true);
            const response = await getRepositories(userId);

            setRepositories(response.data);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setLoadingError(true);
        }
    }

    useEffect(() => {
        (async () => await loadData())();
    }, []);

    const handleLogout = () => {
        console.log('Logout');
    }

    const handleSearch = (query) => {
        console.log('Search: ',query);
    }

    const handleDeleteRepo = (repository) => {
        console.log('Delete Repo: ', repository);
    }

    const handleAddRepo = (url) => {
        console.log('Adicionando Repositório: ', url);
    }

    if (loadingError) {
        return(
            <div className="loading">
                Erro ao carregar os dados de repositório.
                <Link to="/login">Voltar</Link>
            </div>
        )
    }

    if (loading) {
        return(
            <div className="loading">
                Carregando...
            </div>
        )
    }

    return (
        <div id="main">
            <Nav onLogout={handleLogout}/>
            <Search onSearch={handleSearch}/>
            <Repositories 
                repositories={repositories} 
                onDelete={handleDeleteRepo} 
                onAddRepo={handleAddRepo} />

        </div>
    )
}

export default MainPage;