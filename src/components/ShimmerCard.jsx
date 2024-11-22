import React from "react";

import Shine from "./Shine.jsx";
import useTheme from "../../hooks/useTheme";

export default function ShimmerCard() {
  const [mode] = useTheme();

  return (
    <>
      <main className={mode}>
        <div className="countries-container">
          {Array.from({ length: 50 }).map((el, ind) => {
            return (
              <div key={ind} className="country-card shimmer">
                <div
                  className="img"
                  style={{
                    width: "100%",
                    height: "250px",
                    backgroundColor: "#ccc",
                  }}
                >
                  <Shine />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      marginTop: "15px",
                      width: "95%",
                      height: "40px",
                      backgroundColor: "#ccc",
                      borderRadius: "8px",
                    }}
                  ></div>
                  <div
                    style={{
                      marginTop: "10px",
                      width: "95%",
                      height: "20px",
                      backgroundColor: "#ccc",
                      borderRadius: "8px",
                    }}
                  ></div>
                  <div
                    style={{
                      marginTop: "5px",
                      width: "95%",
                      height: "20px",
                      backgroundColor: "#ccc",
                      borderRadius: "8px",
                    }}
                  ></div>
                  <div
                    style={{
                      marginTop: "5px",
                      width: "45%",
                      height: "20px",
                      backgroundColor: "#ccc",
                      borderRadius: "8px",
                      alignSelf: "flex-start",
                      marginLeft: "8px",
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
