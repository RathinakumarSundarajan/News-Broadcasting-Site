import React from 'react';

import Movie from './News';
import classes from './NewsList.module.css';

const MovieList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          description={movie.description}
          content={movie.content}
          author={movie.author}
          readMore={movie.url}         
        />
      ))}
    </ul>
  );
};

export default MovieList;
