import "./Mascot.css";

import SpriteAnimator from "./SpriteAnimator";
import useAnimation from "../../hooks/useAnimation";
import useMascotState from "../../hooks/useMascotState";
import useMovement from "../../hooks/useMovement";

function Mascot() {
  const state = useMascotState();
  const animation = useAnimation(state);
  console.log(animation);
  console.log(animation.frames);
  const x = useMovement(state);

  return (
    <div
      className="mascot"
      style={{
        transform: `translateX(${x}px)`,
      }}
    >
      <SpriteAnimator
        frames={animation.frames}
        frameDuration={animation.fps}
        width={180}
      />
    </div>
  );
}

export default Mascot;