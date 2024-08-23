import { Button } from "@/components/ui/button";

export default function Accelerate() {
  return (
    <section className="h-screen flex justify-center items-center flex-col">
      <h1 className="text-slate-900 mt-2 font-extrabold max-w-[60%] text-center text-5xl">
        A great ecosystem accelerates your progress
        <span className="text-primary">.</span>
      </h1>
      <p className="text-slate-500 font-medium mt-4 max-w-[40%] text-center">
        Let&apos;s contribute in creating a smart generation and digital
        academic development with us.
      </p>
      <Button className="bg-primary mt-5 px-6 py-2 rounded-full">
        Contribute now
      </Button>
    </section>
  );
}
