import { useEffect, useState } from "react";

function useMascotState() {
  const [state, setState] = useState("idle");

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prev) => (prev === "idle" ? "walk" : "idle"));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return state;
}

export default useMascotState;