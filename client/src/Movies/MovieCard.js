import React from 'react';

const MovieCard = props => {
  console.log(props)
  return(
    
    <div className="movie-card">
      <div className="movie-title">
        <h2>{props.details.title}</h2>
      </div>
      <div className="movie-director">
      Director: <em>{props.details.director}</em>
      </div>
      <div className="movie-metascore">
      Metascore: <strong>{props.details.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {props.details.stars.map(star => (
      <div key={star} className="movie-star">
      {star}
      </div>
      ))}
    </div>
  );
};

export default MovieCard;
