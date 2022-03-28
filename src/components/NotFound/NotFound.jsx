import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 64,
        position: "absolute",
        width: "100%",
        height: "100%",
        textDecorationColor: "black",
      }}
    >
      404!
      <Link style={{ color: "red" }} to="/">
        GO!HOME
      </Link>
    </div>
  );
};

export default NotFound;
