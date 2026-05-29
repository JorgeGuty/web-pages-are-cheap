import { Card, CardContent } from "@/components/ui/card";

export default function HeroCard({ message }: { message: string }) {
  return (
    <Card>
      <CardContent>{message}</CardContent>
    </Card>
  );
}
