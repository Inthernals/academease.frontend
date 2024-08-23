import Accelerate from "@/components/home/section/Accelerate";
import Connect from "@/components/home/section/Connect";
import Growing from "@/components/home/section/Growing";
import Hero from "@/components/home/section/Hero";
import HeroImage from "@/components/home/section/HeroImage";
import Learning from "@/components/home/section/Learning";

export default function Home() {
  return (
    <main className="bg-white  min-h-screen">
      <Hero />
      <HeroImage />
      <Growing />
      <Learning />
      <Connect />
      <Accelerate />
    </main>
  );
}
