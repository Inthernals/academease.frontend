import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import Image from "next/image";
import CardHome from "../CardHome";

export default function Hero() {
  return (
    <section className="flex h-screen   flex-col justify-center items-center">
      <div className="flex font-semibold gap-1 items-center text-primary">
        <Bot />
        <p>Integrated with AI</p>
      </div>
      <h1 className="text-slate-900 mt-2 font-extrabold text-5xl">
        Discover a world of knowledge<span className="text-primary">.</span>
      </h1>
      <p className="text-slate-500 font-medium mt-4 max-w-[60%] text-center">
        We offer learning resource services that can be used for academic needs
        such as classes, documents, discussions, and many more.
      </p>
      <div className="flex gap-2 mt-6">
        <Button className="bg-button-gradient px-6 py-2 rounded-full">
          Explore now
        </Button>
        <Button className="text-primary border px-6 py-2 bg-transparent border-primary  rounded-full">
          Discussion with AI
        </Button>
      </div>
    </section>
  );
}
