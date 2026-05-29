import type { Greeting } from "@/types/greeting";

export function GET(): Response {
  return Response.json({ message: "Hello, World!" } satisfies Greeting);
}
