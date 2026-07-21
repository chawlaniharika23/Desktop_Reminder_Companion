import { useEffect, useState } from "react";

function SpriteAnimator({ frames, frameDuration = 200, width = 180 }) {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    if (!frames || frames.length === 0) return;

    setCurrentFrame(0);

    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, frameDuration);

    return () => clearInterval(interval);
  }, [frames, frameDuration]);

  return (
    <img
      src={frames[currentFrame]}
      alt="Mascot"
      style={{ width }}
    />
  );
}

export default SpriteAnimator;