import assert from "node:assert/strict";
import test from "node:test";
import { sceneStepAt } from "./action-scene-stage.mjs";

test("la escena recorre tres productos y vuelve al plano general", () => {
  assert.deepEqual([0, 0.16, 0.37, 0.58, 0.79, 1].map(sceneStepAt), [0, 1, 2, 3, 4, 4]);
});
