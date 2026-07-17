import SpriteAnimator from "./SpriteAnimator";

import idle1 from "../../assets/mascot/idle/idle1.png";
import idle2 from "../../assets/mascot/idle/idle2.png";
import idle3 from "../../assets/mascot/idle/idle3.png";
import idle4 from "../../assets/mascot/idle/idle4.png";

const idleFrames = [
  idle1,
  idle2,
  idle3,
  idle4,
];

function Mascot() {
  return (
    <div className="mascot">
      <SpriteAnimator
        frames={idleFrames}
        frameDuration={180}
        width={180}
      />
    </div>
  );
}

export default Mascot;