import { describe, it, expect, beforeEach } from "vitest";
import { getUsername } from "../utils/storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns the name from the user object in storage", () => {
    const user = { name: "Test User" };

    localStorage.setItem("user", JSON.stringify(user));

    const result = getUsername();
    expect(result).toBe("Test User");
  });

  it("returns null when no user exists in storage", () => {
    const result = getUsername();
    expect(result).toBeNull();
  });
});
