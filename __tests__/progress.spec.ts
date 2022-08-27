import { expect, it } from "vitest";
import { genSaltSync, hash } from "../src";

it("Should show progress", (done) => {
  const salt = genSaltSync(12);

  const progress: number[] = [];

  void hash("hello world", salt, (percent) => {
    progress.push(percent);
  }).then((hash) => {
    expect(typeof hash === "string").toBe(true);
    expect(progress.length).toBeGreaterThan(2);
    expect(progress[0]).toBe(0);
    expect(progress[progress.length - 1]).toBe(1);
    done();
  });
});
