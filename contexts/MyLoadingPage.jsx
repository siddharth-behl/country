import { createContext, useRef, useState } from "react";

import React from "react";
export let MyLoadingPage = createContext();
export default function MyLoadingPageProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <MyLoadingPage.Provider value={[count, setCount]}>
      {children}
    </MyLoadingPage.Provider>
  );
}
