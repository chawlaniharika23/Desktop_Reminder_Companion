import { useState } from "react";

function useMascotState() {
  const [state, setState] = useState("walk");

  return {
    state,
    setState,
  };
}

export default useMascotState;