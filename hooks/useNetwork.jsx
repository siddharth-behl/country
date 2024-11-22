import { useState } from "react";

export default function useNetwork() {
  const [offline, setoffline] = useState(false);
  window.addEventListener("offline", () => {
    setoffline(true);
  });
  window.addEventListener("online", () => {
    setoffline(false);
  });
  return offline;
}
