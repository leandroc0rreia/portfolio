import axios from 'axios';
import { useEffect, useState } from 'react';
import data from '../config.json'

const API = `https://api.github.com/users/${data.username}/repos?sort=updated&direction=desc`;

const useFetchRepositories = () => {
    const [repositories, setRepositories] = useState([]);
    
    useEffect(() => {
        axios.get(API)
            .then(response => {
                setRepositories(response.data);
            })
    }, [])
    
    return (repositories)
}
    
export default useFetchRepositories