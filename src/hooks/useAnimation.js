import { animations } from "../utils/animations";

export default function useAnimation(state) {
  return animations[state];
}