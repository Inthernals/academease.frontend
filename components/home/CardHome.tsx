import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardTitle } from "../ui/card";

export default function CardHome({
  title,
  count,
  description,
}: {
  title: string;
  count: string;
  description: string;
}) {
  return (
    <Card className="p-4 w-[256px]">
      <CardContent className="flex p-0 flex-col gap-4  justify-between">
        <div>
          <CardTitle className="font-bold text-4xl">{count}</CardTitle>
          <h4 className="mt-1">{title}</h4>
          <p className="text-slate-500 text-sm font-medium">{description}</p>
        </div>
        <div className="flex justify-end">
          <ChevronRight />
        </div>
      </CardContent>
    </Card>
  );
}
