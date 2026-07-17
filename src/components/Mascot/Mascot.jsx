import "./Mascot.css";

import SpriteAnimator from "./SpriteAnimator";
import useAnimation from "../../hooks/useAnimation";
import useMascotState from "../../hooks/useMascotState";

function Mascot() {
  const state = useMascotState();
  const animation = useAnimation(state);

  return (
    <div className="mascot">
      <SpriteAnimator
        frames={animation.frames}
        frameDuration={animation.fps}
        width={180}
      />
    </div>
  );
}

export default Mascot;