import Image from "next/image";
import GrowingList from "../GrowingList";
import { Button } from "@/components/ui/button";

export default function Growing() {
  return (
    <section className="flex h-screen  justify-between items-center gap-4 p-4">
      <div>
        <h2 className="font-extrabold text-4xl max-w-[80%] text-slate-900">
          Growing benefits in our academic ecosystem
          <span className="text-primary">.</span>
        </h2>
        <div className="mt-3 flex flex-col gap-2">
          <GrowingList description="Easy access to learning resources." />
          <GrowingList description="Feature-rich and constantly updated as needed." />
          <GrowingList description="User-friendly and comfortable interface." />
        </div>
        <div className="mt-6 gap-2 flex">
          <Button className="text-white px-6 py-2 bg-primary rounded-full">
            Try for free
          </Button>
          <Button className="text-primary border px-6 py-2 bg-transparent border-primary  rounded-full">
            Explore Resources
          </Button>
        </div>
      </div>
      <Image
        alt="Growing image"
        width={1000}
        height={1000}
        className="w-[481px] h-[445px]"
        src={"/image/growing.png"}
      />
    </section>
  );
}
