import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard'
import { useMovies } from '../store/zustand'

export default function Home() {

    const list = useMovies((state) => state.listMovies)
    const [query, setQuery] = useState('');
	const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
		const filtered = list.filter(item =>
			item.Title.toLowerCase().includes(query.toLowerCase()) ||
            item.Genre.toLowerCase().includes(query.toLowerCase())
		);
		setFilteredItems(filtered);
	}, [query]);

  return (
    <div className='main'>
        <header>
            <h1>Movie Nigh</h1>
            <h2>Search a movie and pick your seats</h2>
            <div className='serch-div'>
                <input
                className='input-serch' 
                type="text"
                placeholder='Search movie by title...'
                value={query}
                onChange={(e) => setQuery(e.target.value)} />
            </div>

        </header>
    <div className='home-container'>
        
        {filteredItems.map((item, index) => {
            return (
                <MovieCard 
                key={index}
                img={item.Images[0]}
                year={item.Year}
                runtime={item.Runtime}
                gener={item.Genre}
                language={item.Language}
                obj={item} />
            )
        })}
    </div>
    </div>
  )
}
