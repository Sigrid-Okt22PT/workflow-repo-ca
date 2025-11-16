import { describe, it, expect } from "vitest";
import { isActivePath } from "../utils/userInterface.js";

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    expect(isActivePath("/about.html", "/about.html")).toBe(true);
  });

  it('returns true for root path when path is "/"', () => {
    expect(isActivePath("/", "/")).toBe(true);
  });

  it('returns true for root path when currentPath is "/index.html"', () => {
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("returns true when current path includes the href", () => {
    // e.g. href is /venue, current path is /venue/123
    expect(isActivePath("/venue", "/venue/123")).toBe(true);
  });

  it("returns false when paths don’t match", () => {
    expect(isActivePath("/about", "/contact")).toBe(false);
  });
});
