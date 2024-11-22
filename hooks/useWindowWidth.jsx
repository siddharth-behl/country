import React, { useState } from "react";

export default function useWindowWidth() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  let id;
  window.addEventListener("resize", () => {
    clearTimeout(id);
    id = setTimeout(() => {
      
      setSize([window.innerWidth, window.innerHeight]);
    }, 0);
  });

  return size;
}
