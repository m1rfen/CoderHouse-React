const Movie = ({movie}) => {
  return (
    <div>
      <img src={movie.Poster}/>
      {movie.Title} - {movie.Year}
    </div>
  );
};

export default Movie;