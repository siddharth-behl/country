import React from "react";
import Shine from "./Shine.jsx";
import "../../css/countryDetail.module.css";
import SmallBoxShine from "./SmallBoxShine.jsx";
import BackButton from "./BackButton.jsx";

import useTheme from "../../hooks/useTheme";

export default function ShimmerData() {
  const [mode] = useTheme();
  return (
    <>

      <main className={mode}>
        <div style={{ overflow: "hidden" }}>
          <div className="country-details-container">
            <BackButton />
            <div className="country-details" style={{rowGap:"50px",columnGap:"236px",display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
              <div
                className="sidd"
                style={{
                  overflow: "hidden",
                  aspectRatio: "16 / 9",
                  backgroundColor: "#ccc",
                  marginRight: "0px",
                  borderRadius:"10px" 
                }}
              >
                <Shine />
              </div>

              <div className="details-text-container">
               

                <div className="details-text" style={{ overflow: "hidden" }}>
                  {Array.from({ length: 8 }).map((el, index) => {
                    return <SmallBoxShine key={index} width="300px" />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
