import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <Fragment>
      <h1>Join</h1>
      <input type="text" onChange={e => setName(e.target.value)} />
      <input type="text" onChange={e => setRoom(e.target.value)} />

      <Link
        onClick={e => (name === "" || room === "" ? e.preventDefault() : null)}
        to={`/chat?name=${name}&room=${room}`}
      >
        <button type="submit">Sign In</button>
      </Link>
    </Fragment>
  );
};

export default Join;
