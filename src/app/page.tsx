import HeroCard from "@/components/hero/HeroCard";
import type { Greeting } from "@/types/greeting";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

export default async function Page() {
  const res = await fetch(`${BASE_URL}/api/hello`);
  if (!res.ok) throw new Error(`greeting fetch failed: ${res.status}`);
  const { message } = (await res.json()) as Greeting;
  return (
    <div className="flex flex-1 items-center justify-center">
      <HeroCard message={message} />
    </div>
  );
}
