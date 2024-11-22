import "./App.css";
import useWindowWidth from "..//hooks/useWindowWidth.jsx";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import GIF from "./components/GIF.jsx";
import ThemeProvider from "..//contexts/ThemeContext.jsx";
import LoadingBar from "..//contexts/LoadingBar.jsx";
import MyLoadingBar from "./components/MyLoadingBar.jsx";
import useNewtork from "..//hooks/useNetwork";
import { useContext, useEffect, useRef, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import MyLoadingPageProvider, {
  MyLoadingPage,
} from "../contexts/MyLoadingPage.jsx";
import UseLoading from "./components/UseLoading.jsx";
export default function App() {
  const offline = useNewtork();
  let [count, setCount] = useContext(MyLoadingPage);

  useEffect(() => {
    setTimeout(() => {
      setCount(1);
    }, 1500);
  }, []);
  // const size = useWindowWidth();

  return offline ? (
    "You are offline"
  ) : (
    <>
      
      {count == 1 ? "" : <UseLoading />}
      <Analytics />
      <SpeedInsights />
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
