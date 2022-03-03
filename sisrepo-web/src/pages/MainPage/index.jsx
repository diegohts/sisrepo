import React, { useState, useEffect } from "react";
import { getRepositories, createRepository, destroyRepository } from "../../services/api";
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
            const response = await getRepositories(userId, query);

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
        loadData(query);
        console.log('Search: ',query);
    }

    const handleDeleteRepo = async (repository) => {
        console.log('Delete Repo: ', repository);
        try {
            await destroyRepository(userId, repository._id);
            await loadData();
        } catch (err) {
            console.error(err);
            setLoadingError(true);
        }
    }

    const handleNewRepo = async (url) => {
        console.log('Novo Repositório: ', url);
        try {
            await createRepository(userId, url);
            await loadData();
        } catch (err) {
            console.error(err);
            setLoadingError(true);
        }
    }

    if (loadingError) {
        return(
            <div className="loading">
                Erro ao carregar os dados de repositório.
                <Link to="/login">  Voltar</Link>
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
                onNewRepo={handleNewRepo} />

        </div>
    )
}

export default MainPage;