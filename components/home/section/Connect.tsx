import Image from "next/image";
import GrowingList from "../GrowingList";
import { Button } from "@/components/ui/button";

export default function Connect() {
  return (
    <section className="flex h-screen  justify-between items-center gap-4 p-4">
      <Image
        alt="Growing image"
        width={1000}
        height={1000}
        className="w-[424px] h-[408px]"
        src={"/image/connect.png"}
      />
      <div>
        <h2 className="font-extrabold text-4xl max-w-[80%] text-slate-900">
          We connect learners and educators
          <span className="text-primary">.</span>
        </h2>
        <p className="text-slate-500 font-medium mt-4 max-w-[60%]">
          Contributing to the world of education by connecting those who want to
          grow.
        </p>

        <div className="mt-6 gap-2 flex">
          <Button className="text-white px-6 py-2 bg-primary rounded-full">
            About academease
          </Button>
          <Button className="text-primary border px-6 py-2 bg-transparent border-primary  rounded-full">
            Explore Now
          </Button>
        </div>
      </div>
    </section>
  );
}
