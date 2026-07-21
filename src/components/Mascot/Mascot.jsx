import "./Mascot.css";

import SpriteAnimator from "./SpriteAnimator";
import useAnimation from "../../hooks/useAnimation";
import useMascotState from "../../hooks/useMascotState";
import useMovement from "../../hooks/useMovement";
import SpeechBubble from "./SpeechBubble";
import useReminder from "../../hooks/useReminder";

function Mascot() {
  const { state, setState } = useMascotState();
  const animation = useAnimation(state);
  const x = useMovement(state, setState);
  const message = useReminder(state);

  return (
    <div
      className="mascot"
      style={{
        transform: `translateX(${x}px)`,
      }}
    >
      <SpeechBubble message={message} />
      <SpriteAnimator
        frames={animation.frames}
        frameDuration={animation.fps}
        width={180}
      />
    </div>
  );
}

export default Mascot;