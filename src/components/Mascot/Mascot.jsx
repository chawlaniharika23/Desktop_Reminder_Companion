import "./Mascot.css";
import useMovement from "../../hooks/useMovement";
import SpriteAnimator from "./SpriteAnimator";
import useAnimation from "../../hooks/useAnimation";
import useMascotState from "../../hooks/useMascotState";

function Mascot() {
  const state = useMascotState();
  const animation = useAnimation(state);
  const x = useMovement(state);

  return (
    <div
      className="mascot"
      style={{
        transform: `translateX(${x}px)`
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