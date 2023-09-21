import React from 'react';
// import { Link } from "react-router-dom";

import classes from './News.module.css';

const Movie = (props) => {
  
  return (
    <li className={classes.movie}>
      <h4>{props.title}</h4><hr/>
      <h6>{props.description}</h6><br/>
      <p>{props.content}</p>
      <p>Author -{props.author}</p>
      <p>...Read More</p>
    </li>
  );
};

export default Movie;
