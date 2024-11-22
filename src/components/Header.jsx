
import { Link } from "react-router-dom";
import logo from  "../assets/Public/countryHunt.png"
import useTheme from "../../hooks/useTheme";

export default function Header() {
  const [mode, setMode] = useTheme();

  function handleDark() {
    if (mode == "dark") {
      setMode(null);
      localStorage.removeItem("theme");
    } else {
      setMode("dark");
      localStorage.setItem("theme", "dark");
    }
  }
  return (
    <header
      className={`header-container ${mode ? "dark" : ""}`}
      style={{ position: "sticky", top: 0,zIndex:2 }}
    >
      <div className="header-content">
        <h2 className="title">
          <Link to="/"><img src={logo} alt="CountryHunt" /></Link>
        </h2>

        <Link to="/contact">
          <h3>Contact</h3>
        </Link>
        <p className="theme-changer" onClick={handleDark}>
          {mode ? (
            <>
              <i className="fa-regular fa-sun"></i>&nbsp;&nbsp;Light Mode
            </>
          ) : (
            <>
              <i className="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark Mode
            </>
          )}
        </p>
      </div>
    </header>
  );
}
