import { useEffect, useState } from "react";
import { messages } from "../data/messages";

function useReminder(state) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (state !== "idle") {
      setMessage("");
      return;
    }

    const random =
      messages[Math.floor(Math.random() * messages.length)];

    const timer = setTimeout(() => {
      setMessage(random);
    }, 1000);

    return () => clearTimeout(timer);
  }, [state]);

  return message;
}

export default useReminder;