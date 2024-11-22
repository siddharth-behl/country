import gif from "../assets/Public/Animation - 1732269999765.gif";
import React, { useEffect, useState } from "react";

export default function GIF() {
  let id;
  const [dot, setdot] = useState(".");
  if (dot.length == 5) {
    setdot(".");
  }
  useEffect(() => {
    id = setInterval(() => {
      setdot(dot + ".");
    }, 300);
    return () => clearInterval(id);
  }, [dot]);

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "rgb(1 1 1 / 90%)",
          position: "fixed",
          zIndex: 3,
        }}
      ></div>
      <div
        style={{
          zIndex: 3,
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <img src={gif} alt="" />
        <h2 style={{ color: "white", textAlign: "center" }}>Loading {dot}</h2>
      </div>
    </>
  );
}
