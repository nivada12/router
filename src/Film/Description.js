import React from "react";
import { Link } from "react-router-dom";

function Description(props) {
  const { id, title, desc, trailer, rate } = props.location.state;
  console.log(props.location.state);
  return (
    <div>
      <Link to="/">
        <u>BACK TO HOME</u>
      </Link>
      <h3>{title}'s Trailer</h3>

      <iframe
        width="820"
        height="450"
        src={trailer}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      ></iframe>
      <a href={trailer}> {title}'s Trailer</a>

      <p>Description: {desc}</p>
    </div>
  );
}

export default Description;
