import BackButton from "./BackButton.jsx";
import { useContext, useEffect } from "react";
import { LoadingContext } from "../../contexts/LoadingBar.jsx";
import useTheme from "../../hooks/useTheme.jsx";
import { useOutletContext } from "react-router-dom";
export default function Contact() {
  let [mode] = useTheme();
  

  const setProgress = useContext(LoadingContext)[1];
  useEffect(()=>{setProgress(100)},[])

  return (
    <main className={`contact ${mode}`} style={{ height: "100vh" }}>
      <BackButton />
      <div>
        <h1>Contact Us</h1>
        <p>Please feel free to reach out to us at any time.</p>
        <p>Email: info@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Adode?mode:""adress: 123 Main St, City, State, ZIP</p>
      </div>
    </main>
  );
}
