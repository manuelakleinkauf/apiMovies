import React from 'react';
import { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import './detalhes.css';



function Detalhes(){
    const KEY = process.env.REACT_APP_KEY;
    const {id} = useParams()
    //console.log(id) 
    const [movie, setMovie] = useState([])

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US&page=1`)
        .then(response => response.json())
        .then(dados => {
            
            const movie = {
                id,
                title: dados.title,
                sinopse: dados.overview,
                releaseDate: dados.release_date,
                originalLanguage: dados.original_language
            }
            console.log(movie)
            setMovie(movie)
            
        })
    }, [id])

    return(
        <div className='corpo'>
            <div className='filme'>
            </div>
            <div className='detalhes'>
                <h1>{movie.title}</h1>
                <span>Sinopse: {movie.sinopse}</span>
                <span className='dtLancamento'>Data de Lançamento: {movie.releaseDate}</span>
                <span className='idioma'>Idioma Original: {movie.originalLanguage}</span>
                <Link to="/"><button>Voltar</button></Link>
                
            </div>
        </div>
       
      
    )
}

export default Detalhes