import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from './components/card';
import './main.css';

const Main = () => {

  axios.defaults.baseURL = 'https://streaming-api-1.herokuapp.com';

  const [trigger, setTrigger] = useState(false);
  const [List, setList] = useState([]);

  async function getMovies() {
    return await axios.get('/movie/findMany')
  }

  useEffect(() => {
    if (!trigger) {
      getMovies()
      .then((response) => {        
          setList(response.data)
          setTrigger(true)
      })
    }
  }, [trigger]);

  return (
    <>
      <div className='movies'>
        {List.map((movie) => {
          return (
            <Card
              cover={movie.cover}
              alt={movie.title}
              title={movie.title}
              id={movie.id}
              key={movie.id}
            />
          );
        })}
      </div>
    </>
  )
}

export default Main;