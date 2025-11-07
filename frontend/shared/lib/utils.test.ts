import { cn } from "./utils";

describe("cn", () => {
  it("merges class names and removes duplicates", () => {
    expect(cn("p-2", "p-2", "text-sm")).toBe("p-2 text-sm");
  });

  it("handles conditional and undefined values", () => {
    const cond = false;
    expect(cn("base", cond && "x", undefined, null as unknown as string)).toBe(
      "base",
    );
  });
});
