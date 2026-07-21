import { useEffect, useState } from "react";

function useMovement(state, setState) {
  const START_X = window.innerWidth;
  const TARGET_X = 900;
  const SPEED = 2;

  const [x, setX] = useState(START_X);

  useEffect(() => {
    if (state !== "walk") return;

    const interval = setInterval(() => {
      setX((prev) => {
        if (prev <= TARGET_X) {
          setState("idle");
          return TARGET_X;
        }

        return prev - SPEED;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [state, setState]);

  return x;
}

export default useMovement;