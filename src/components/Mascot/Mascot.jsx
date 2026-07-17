import SpriteAnimator from "./SpriteAnimator";
import useAnimation from "../../hooks/useAnimation";

function Mascot() {
  const animation = useAnimation("idle");

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