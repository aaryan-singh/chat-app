import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const ENDPOINT = "localhost:5000";
  const socket = io(ENDPOINT);
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, a => alert(a.error));

    // equivalent of componentDidUnmount, used for cleanup
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);
  return <h1>Hi</h1>;
};
export default Chat;
