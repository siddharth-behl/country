import { createContext, useState } from "react";
export const LoadingContext = createContext();

export default function LoadingBar({ children }) {
  const [progress, setProgress] = useState(0);
  return (
    <LoadingContext.Provider value={[progress, setProgress]}>
      {children}
    </LoadingContext.Provider>
  );
}
