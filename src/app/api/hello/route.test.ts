import { describe, it, expect } from "vitest";
import { GET } from "./route";

describe("GET /api/hello", () => {
  it("returns status 200 and Hello, World! body", async () => {
    const response = await GET();
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({ message: "Hello, World!" });
  });
});
