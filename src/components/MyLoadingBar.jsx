import React, { useContext, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { LoadingContext } from "../../contexts/LoadingBar.jsx";

import useTheme from "../../hooks/useTheme";
export default function MyLoadingBar() {
  const [progress, setProgress] = useContext(LoadingContext);
  const [mode] = useTheme();
  return (
    <>
      <LoadingBar
        height={3}
        color="#ff0000e6"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </>
  );
}
