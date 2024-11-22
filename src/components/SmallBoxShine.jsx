import React from "react";
import Shine from "./Shine";
import "../../css/smallbox.css"
export default function SmallBoxShine({width,marginBottom}) {
  return (
    <div className="smallbox" style={{ overflow:"hidden",width:width , borderRadius:"10px" , background: "#ccc" ,marginBottom:{marginBottom} }}>
      <Shine />
    </div>
  );
}
