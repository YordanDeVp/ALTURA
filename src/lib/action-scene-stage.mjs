export function sceneStepAt(progress) {
  return progress < 0.16 ? 0 : progress < 0.37 ? 1 : progress < 0.58 ? 2 : progress < 0.79 ? 3 : 4;
}
