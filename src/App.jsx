import "./App.css";
import useWindowWidth from "..//hooks/useWindowWidth.jsx";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import GIF from "./components/GIF.jsx";
import ThemeProvider from "..//contexts/ThemeContext.jsx";
import LoadingBar from "..//contexts/LoadingBar.jsx";
import MyLoadingBar from "./components/MyLoadingBar.jsx";
import useNewtork from "..//hooks/useNetwork";
import { useEffect, useState } from "react";

export default function App() {
  const offline = useNewtork();
  const [start, setStart] = useState(true);
  useEffect(() => {
    setTimeout(()=>{setStart(false)},1500)
  },[]);

  // const size = useWindowWidth();

  return offline ? (
    "You are offline"
  ) : (
    <>
      {start && <GIF />}

      <ThemeProvider>
        <LoadingBar>
          <MyLoadingBar />

          <Header />
          {/* <h1 style={{ textAlign: "center" }}>{`${size[0]} x ${size[1]}`}</h1> */}
          <Outlet />
        </LoadingBar>
      </ThemeProvider>
    </>
  );
}
