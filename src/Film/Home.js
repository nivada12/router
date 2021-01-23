import React, { useState, useEffect } from "react";

import Filter from "./Filter";
import MovieList from "./MovieList";
function Home() {
  const obj = [
    {
      id: 1,
      title: "titanic",
      desc: "oeuaiofozefzo",
      rate: "1",
      trailer: "https://www.youtube.com/embed/watch?v=t_Gd7rsWer4",
    },
    {
      id: 2,
      title: "batman",
      desc: "sdfsdfsfs",
      rate: "2",
      trailer: "https://www.youtube.com//embed/watch?v=-FZ-pPFAjYY",
    },
    {
      id: 3,
      title: "superman",
      desc: "oqsdqdsq",
      rate: "4",
      trailer: "https://www.youtube.com/embed/watch?v=-FZ-pPFAjYY",
    },
    {
      id: 4,
      title: "dark",
      desc: "iopppmm",
      rate: "5",
      trailer: "https://www.youtube.com/embed/watch?v=-FZ-pPFAjYY",
    },
  ];
  const [movies, SetMovies] = useState(obj);
  const [input, setInput] = useState("");
  const [newMovie, setNewMovie] = useState({});

  useEffect(() => {
    console.log(movies);

    console.log("refresh");

    SetMovies(
      obj.filter((p) => p.rate.includes(input) || p.title.includes(input))
    );
  }, [input]);

  const submitHandler = (e) => {
    e.preventDefault();
    let a = [...movies, newMovie];
    SetMovies(a);
    setNewMovie({ id: "", title: "", desc: "", trailer: "", rate: "" });
  };
  const deleteHandler = (id) => {
    const deleteMovie = movies.filter((m) => m.id !== id); //function delete
    console.log(deleteMovie);
    console.log(id);

    SetMovies(deleteMovie);
  };

  return (
    <div>
      <div className="container mt-5">
        {/* send send a function to filter compoments */}
        <Filter updateInput={setInput} />
        <div className="input-group-pretend">
          <form
            onSubmit={submitHandler}
            className="d-flex justify-content-between mt-2"
          >
            <input
              className="input-group-text"
              type="Number"
              placeholder="id"
              value={newMovie.id}
              onChange={(e) => {
                setNewMovie({ ...newMovie, id: e.target.value });
              }}
            />
            <input
              className="input-group-text"
              type="text"
              placeholder="title"
              value={newMovie.title}
              onChange={(e) => {
                setNewMovie({ ...newMovie, title: e.target.value });
              }}
            />
            <input
              className="input-group-text"
              type="text"
              placeholder="description"
              value={newMovie.desc}
              onChange={(e) => {
                setNewMovie({ ...newMovie, desc: e.target.value });
              }}
            />
            <input
              className="input-group-text"
              type="text"
              placeholder="url"
              value={newMovie.trailer}
              onChange={(e) => {
                setNewMovie({ ...newMovie, trailer: e.target.value });
              }}
            />
            <input
              className="input-group-text"
              type="text"
              placeholder="rate"
              value={newMovie.rate}
              onChange={(e) => {
                setNewMovie({ ...newMovie, rate: e.target.value });
              }}
            />
            <button class="btn btn-outline-secondary">add movie</button>
          </form>
        </div>
        {/* send movielist to movie list components */}
        <MovieList movies={movies} deleteM={deleteHandler} />
        {/*  deleteM send function to movielist component -- */}
      </div>
    </div>
  );
}

export default Home;
