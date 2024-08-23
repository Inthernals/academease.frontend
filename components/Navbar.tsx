import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./Navigation";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="p-4 flex fixed top-0 bg-white inset-x-0 max-w-[1168px] mx-auto justify-between">
      <Image
        width={200}
        height={200}
        alt="Logo Academease"
        src={"/image/logo.png"}
      />

      <Navigation />
      <div className="flex gap-2">
        <Button className="bg-transparent py-[10px] px-6 text-slate-900 font-semibold hover:bg-transparent">
          Sign in
        </Button>
        <Button className="font-semibold bg-primary rounded-full py-[10px] px-6">
          Sign up
        </Button>
      </div>
    </nav>
  );
}
