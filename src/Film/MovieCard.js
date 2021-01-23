import React from "react";
import { Link } from "react-router-dom";

function MovieCard(props) {
  const { id, title, desc, posteUrl, rate } = props.movie;
  return (
    <Link
      to={{
        pathname: "/movie/" + props.movie.id,
        state: props.movie,
      }}
    >
      <div className="card text-dark bg-white mb-3">
        <div className="card-header">{rate} Stars</div>

        <div className="card-header">
          <p>{posteUrl}</p>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <button
            className="btn btn-outline-danger"
            onClick={(e) => {
              e.preventDefault();
              props.delete(id);
            }}
          >
            delete
          </button>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
