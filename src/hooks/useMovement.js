import { useEffect, useState } from "react";

function useMovement(state) {
  const [x, setX] = useState(-200);

  useEffect(() => {
    if (state !== "walk") return;

    const interval = setInterval(() => {
      setX((prev) => prev + 2);
    }, 16);

    return () => clearInterval(interval);
  }, [state]);

  return x;
}

export default useMovement;