import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./card";


const MyList = () => {

  axios.defaults.baseURL = 'https://streaming-api-1.herokuapp.com';

  const navigate = useNavigate();

  if (!localStorage.getItem('token')) {
    navigate('/login');
  }

  const [myList, setMyList] = useState([]);

  const getList = async () => {
    return await axios.get('user/seeList', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  };

  useEffect(() => {
    getList()
    .then((res) => {
      setMyList(res.data);
    })
    .catch(() => {
      navigate('/login');
    });
  }, []);

  if (myList.length === 0) {
    return (
      <h2>You don't have movies in the list</h2>
    )
  } else {
    return (
      <div className='movies'>
        {myList.map((movie) => {
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
    )
  }
}

export default MyList;