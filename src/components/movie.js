import axios from "axios";
import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {

  axios.defaults.baseURL = 'https://streaming-api-1.herokuapp.com';

  const id = useParams().id;

  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    return axios.get(`/movie/findUnique/${id}`);
  };

  useEffect(() => {
    getMovie().then((res) => {
      setMovie(res.data);
    });
  }, []);

  const addMovie = async () => {
    await axios.patch(`/user/addList/${movie.id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    }); //Não entendi pq fica dando Unauthorized :(
    alert('Movie Added');
  };
  
  return (
    <div className='flex__center'>

      <div className='movie__title'>
        <button onClick={addMovie} className='nav__buttons'>
          Add to My List
        </button>
        <h3>{movie.year} - {movie.title}</h3>
      </div>     

      <div className='movies'>
        <div className='movie__details__left'>
          <img src={movie.cover} alt=''/>
        </div>
        <div className='movie__details__right'>
          <h2 className='movie__details__resume'>{movie.resume}</h2>
        </div>
      </div>
    </div>
  )
}

export default Movie;