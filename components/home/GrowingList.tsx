import { Check } from "lucide-react";

export default function GrowingList({ description }: { description: string }) {
  return (
    <div className="flex gap-1 items-center">
      <div className="text-blue-500 flex items-center justify-center p-1 bg-blue-100 rounded-full">
        <Check className="w-4 h-4" />
      </div>
      <p className="text-slate-500 font-medium ">{description}</p>
    </div>
  );
}
