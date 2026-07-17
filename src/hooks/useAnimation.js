import { animations } from "../utils/animations";

function useAnimation(state) {
  return animations[state];
}

export default useAnimation;