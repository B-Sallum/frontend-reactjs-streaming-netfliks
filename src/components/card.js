import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to={`/movie/${props.id}`}>
      <div className='movie__card'>
        <h3 className='movie__title'>{props.title}</h3>
        <img src={props.cover} alt={props.alt} />
      </div>
    </Link>
  )
}
export default Card;