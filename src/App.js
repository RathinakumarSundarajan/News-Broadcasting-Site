import React, { useState } from 'react';

import MoviesList from './components/NewsList';
import './App.css';

function App () {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  

 async function fetchNews () {
  setLoading(true);
   const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=88925ba8e1254d87a292f54ab572b9e6')
    // .then((response) => {return response.json();})
    const data = await response.json();
    // console.log(data)

      const passMovies = data.articles.map((movie) =>{
        return{
          id:movie.source.id,
          author:movie.author,
          title:movie.title,
          description:movie.description,
          content:movie.content,
          readMore:movie.url
        }
      })
      // console.log(passMovies)
      setMovies(passMovies)
      setLoading(false)
    };
  

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchNews}>Click to Get News</button>
      </section>
      <section>
        {!loading && movies.length > 0 && <MoviesList movies={movies}/>}
        {!loading && movies.length === 0 && <h5>No News Found</h5>}
        {loading && <h5>Loading Your News...</h5>}
      </section>
    </React.Fragment>
  );
}

export default App;
