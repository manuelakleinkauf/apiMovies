import React from 'react';
import './index.css';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';



function Home(){
    const KEY = process.env.REACT_APP_KEY;
    const image_path= 'https://image.tmdb.org/t/p/w500'
    
    //useState retorna duas coisas: primeiro a variavel q armazena o estado e segundo a variavel q atualiza o estado 
    const [movies, setMovies] = useState([])
    
    useEffect(()=>{
        //consumindo a api...
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US&page=1`)
        .then(response => response.json())
        .then(dados => setMovies(dados.results))
    },[])
    
    return(
        <div>
            <h1>Movies</h1>
            <ul>
                {movies.map(movie => {
                    return(
                        <li key={movie.id}>
                        <Link to={`/detalhes/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title}/></Link>
                        <span>{movie.title}</span>
                        </li>
                    )
                })}
            </ul>
           
            
        </div>
    )
}

export default Home