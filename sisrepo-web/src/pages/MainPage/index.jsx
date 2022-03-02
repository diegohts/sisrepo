import React, { useState, useEffect } from "react";
import { getRepositories } from "../../services/api";
import Nav from "./Nav";
import Repositories from "./Repositories";
import Search from "./Search";
import "./styles.css";

const userId= '620ed1a0eea97a9d780715d0';

const MainPage = () => {
    const [repositories, setRepositories] = useState([]);


    const loadData = async (query = '') => {
        const response = await getRepositories(userId);

        console.log(response.data);

        setRepositories(response.data);
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